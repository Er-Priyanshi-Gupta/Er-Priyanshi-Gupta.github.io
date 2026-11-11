import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

interface ThreeCanvasProps {
  isDark?: boolean;
}

export const ThreeCanvas: React.FC<ThreeCanvasProps> = ({ isDark = true }) => {
  const mountRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = mountRef.current;
    if (!container) return;

    // Check prefers-reduced-motion
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    // 1. Scene, Camera, Renderer
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      45,
      container.clientWidth / container.clientHeight,
      0.1,
      1000
    );
    camera.position.z = 24;

    const renderer = new THREE.WebGLRenderer({
      alpha: true,
      antialias: true,
      powerPreference: 'high-performance',
    });
    renderer.setSize(container.clientWidth, container.clientHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    container.appendChild(renderer.domElement);

    // 2. Geometry - Neural Sphere of Nodes & Connected Lines
    const particleCount = 140;
    const radius = 7.5;
    const geometry = new THREE.BufferGeometry();
    const positions = new Float32Array(particleCount * 3);
    const originalPositions: THREE.Vector3[] = [];

    for (let i = 0; i < particleCount; i++) {
      // Golden spiral distribution on sphere
      const phi = Math.acos(-1 + (2 * i) / particleCount);
      const theta = Math.sqrt(particleCount * Math.PI) * phi;

      const x = radius * Math.cos(theta) * Math.sin(phi);
      const y = radius * Math.sin(theta) * Math.sin(phi);
      const z = radius * Math.cos(phi);

      positions[i * 3] = x;
      positions[i * 3 + 1] = y;
      positions[i * 3 + 2] = z;
      originalPositions.push(new THREE.Vector3(x, y, z));
    }

    geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));

    // Particle Material
    const primaryColor = isDark ? 0x9560f5 : 0x7135a8;
    const secondaryColor = isDark ? 0xd45ac5 : 0xa855f7;

    const particleMaterial = new THREE.PointsMaterial({
      color: primaryColor,
      size: 0.35,
      transparent: true,
      opacity: 0.85,
      blending: THREE.AdditiveBlending,
    });

    const particles = new THREE.Points(geometry, particleMaterial);
    scene.add(particles);

    // Inner Icosahedron Cage for geometric depth
    const innerGeo = new THREE.IcosahedronGeometry(radius * 0.72, 1);
    const innerMat = new THREE.MeshBasicMaterial({
      color: secondaryColor,
      wireframe: true,
      transparent: true,
      opacity: isDark ? 0.22 : 0.15,
    });
    const innerSphere = new THREE.Mesh(innerGeo, innerMat);
    scene.add(innerSphere);

    // Connecting Network Lines between nearby nodes
    const lineMaterial = new THREE.LineBasicMaterial({
      color: isDark ? 0x9560f5 : 0x7135a8,
      transparent: true,
      opacity: isDark ? 0.18 : 0.12,
      blending: THREE.AdditiveBlending,
    });

    const linePositions: number[] = [];
    const maxDistance = 3.6;

    for (let i = 0; i < particleCount; i++) {
      for (let j = i + 1; j < particleCount; j++) {
        const p1 = originalPositions[i];
        const p2 = originalPositions[j];
        const dist = p1.distanceTo(p2);
        if (dist < maxDistance) {
          linePositions.push(p1.x, p1.y, p1.z);
          linePositions.push(p2.x, p2.y, p2.z);
        }
      }
    }

    const lineGeometry = new THREE.BufferGeometry();
    lineGeometry.setAttribute(
      'position',
      new THREE.Float32BufferAttribute(linePositions, 3)
    );
    const lineMesh = new THREE.LineSegments(lineGeometry, lineMaterial);
    scene.add(lineMesh);

    // Group for unified rotation & tilt
    const group = new THREE.Group();
    group.add(particles);
    group.add(innerSphere);
    group.add(lineMesh);
    scene.add(group);

    // 3. Mouse Interaction
    let targetRotationX = 0;
    let targetRotationY = 0;
    let mouseX = 0;
    let mouseY = 0;

    const handleMouseMove = (event: MouseEvent) => {
      const rect = container.getBoundingClientRect();
      mouseX = ((event.clientX - rect.left) / rect.width) * 2 - 1;
      mouseY = -(((event.clientY - rect.top) / rect.height) * 2 - 1);

      targetRotationY = mouseX * 0.45;
      targetRotationX = -mouseY * 0.45;
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });

    // 4. Responsive Resize
    const handleResize = () => {
      if (!container) return;
      camera.aspect = container.clientWidth / container.clientHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(container.clientWidth, container.clientHeight);
    };

    window.addEventListener('resize', handleResize);

    // 5. Animation Loop
    let animationFrameId: number;
    let clock = new THREE.Clock();

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);

      const elapsedTime = clock.getElapsedTime();

      if (!prefersReducedMotion) {
        // Continuous gentle rotation
        group.rotation.y += 0.003;
        group.rotation.x += 0.0015;

        // Smooth mouse lerp
        group.rotation.y += (targetRotationY - group.rotation.y) * 0.05;
        group.rotation.x += (targetRotationX - group.rotation.x) * 0.05;

        // Subtle pulsing of inner cage
        const scale = 1 + Math.sin(elapsedTime * 1.5) * 0.03;
        innerSphere.scale.set(scale, scale, scale);
      }

      renderer.render(scene, camera);
    };

    animate();

    // 6. Cleanup
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);

      geometry.dispose();
      particleMaterial.dispose();
      innerGeo.dispose();
      innerMat.dispose();
      lineGeometry.dispose();
      lineMaterial.dispose();
      renderer.dispose();

      if (container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
    };
  }, [isDark]);

  return (
    <div
      ref={mountRef}
      className="w-full h-full min-h-[380px] md:min-h-[480px] flex items-center justify-center cursor-grab active:cursor-grabbing relative"
      aria-label="Interactive 3D Neural Network Sphere Visualizer"
    />
  );
};

