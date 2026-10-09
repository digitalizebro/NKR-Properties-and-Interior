import React, { useState, useRef, useMemo, Suspense } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import * as THREE from 'three';
import { Sparkles, Compass, RotateCcw, Palette, ArrowRight } from 'lucide-react';
import { createWhatsAppUrl, BUSINESS_INFO } from '../data/business';

export type InteriorThemeKey = 'navy-gold' | 'ivory-oak' | 'champagne-brass';

interface ThemeConfig {
  name: string;
  subtitle: string;
  floorColor: string;
  wallColor: string;
  sofaColor: string;
  cushionColor: string;
  tableColor: string;
  accentMetal: string;
  artPrimary: string;
  lightWarmth: string;
}

const THEMES: Record<InteriorThemeKey, ThemeConfig> = {
  'navy-gold': {
    name: 'Midnight Navy & Brushed Gold',
    subtitle: 'NKR signature aesthetic with rich midnight navy velvet, warm timber, and brushed gold accents',
    floorColor: '#4A3525', // dark walnut timber
    wallColor: '#F0F4FA',  // soft pale ivory-blue
    sofaColor: '#0B1B3D',  // deep royal navy blue
    cushionColor: '#C69A27', // warm metallic gold
    tableColor: '#1B2433', // dark Nero Marquina
    accentMetal: '#DFB13C', // polished gold
    artPrimary: '#0B1B3D',
    lightWarmth: '#FFF2DF',
  },
  'ivory-oak': {
    name: 'Warm Ivory & Natural Oak',
    subtitle: 'Bright Scandinavian warmth with pale oak timbers and cream linen bouclé',
    floorColor: '#C4A482', // warm oak
    wallColor: '#F8F9FB',  // warm ivory
    sofaColor: '#E8ECF2',  // cream bouclé
    cushionColor: '#C69A27', // warm gold
    tableColor: '#ECEFF4', // off-white marble
    accentMetal: '#C69A27', // brushed brass
    artPrimary: '#0B1B3D',
    lightWarmth: '#FFF7E6',
  },
  'champagne-brass': {
    name: 'Champagne Travertine & Brass',
    subtitle: 'Monolithic luxury with polished travertine stone and radiant champagne tones',
    floorColor: '#DDD7C7', // honed travertine
    wallColor: '#F5F6F8',  // delicate limestone
    sofaColor: '#D5DFED',  // soft powder slate
    cushionColor: '#0B1B3D', // navy contrast
    tableColor: '#F1EDE4', // calacatta gold
    accentMetal: '#C69A27', // polished gold
    artPrimary: '#C69A27',
    lightWarmth: '#FFF9ED',
  },
};

// 3D Room Interior Model
function InteriorRoomScene({ themeKey }: { themeKey: InteriorThemeKey }) {
  const currentTheme = THEMES[themeKey];
  const lampRef = useRef<THREE.PointLight>(null);

  useFrame((state) => {
    if (lampRef.current) {
      const t = state.clock.getElapsedTime();
      lampRef.current.intensity = 1.6 + Math.sin(t * 2) * 0.1;
    }
  });

  const mats = useMemo(() => {
    return {
      floor: new THREE.MeshStandardMaterial({
        color: currentTheme.floorColor,
        roughness: 0.35,
        metalness: 0.1,
      }),
      backWall: new THREE.MeshStandardMaterial({
        color: currentTheme.wallColor,
        roughness: 0.85,
      }),
      sideWall: new THREE.MeshStandardMaterial({
        color: currentTheme.wallColor,
        roughness: 0.85,
      }),
      ceiling: new THREE.MeshStandardMaterial({
        color: '#FFFFFF',
        roughness: 0.9,
      }),
      sofa: new THREE.MeshStandardMaterial({
        color: currentTheme.sofaColor,
        roughness: 0.75,
      }),
      cushion: new THREE.MeshStandardMaterial({
        color: currentTheme.cushionColor,
        roughness: 0.6,
      }),
      coffeeTable: new THREE.MeshStandardMaterial({
        color: currentTheme.tableColor,
        roughness: 0.25,
        metalness: 0.1,
      }),
      tableLegs: new THREE.MeshStandardMaterial({
        color: currentTheme.accentMetal,
        roughness: 0.25,
        metalness: 0.85,
      }),
      windowFrame: new THREE.MeshStandardMaterial({
        color: '#0B1B3D',
        roughness: 0.3,
        metalness: 0.5,
      }),
      windowGlass: new THREE.MeshPhysicalMaterial({
        color: '#FFFFFF',
        transmission: 0.95,
        transparent: true,
        opacity: 0.3,
        roughness: 0.05,
        ior: 1.5,
      }),
      lampShade: new THREE.MeshStandardMaterial({
        color: '#FFFDF9',
        roughness: 0.4,
      }),
      lampPole: new THREE.MeshStandardMaterial({
        color: currentTheme.accentMetal,
        roughness: 0.2,
        metalness: 0.9,
      }),
      artCanvas: new THREE.MeshStandardMaterial({
        color: currentTheme.artPrimary,
        roughness: 0.7,
      }),
      artFrame: new THREE.MeshStandardMaterial({
        color: currentTheme.accentMetal,
        roughness: 0.25,
        metalness: 0.85,
      }),
      gardenBackdrop: new THREE.MeshBasicMaterial({
        color: '#0E2140',
      }),
    };
  }, [currentTheme]);

  return (
    <group position={[0, -1.2, 0]}>
      {/* 1. Floor Plate */}
      <mesh position={[0, 0, 0]} receiveShadow material={mats.floor}>
        <boxGeometry args={[6.4, 0.1, 6.4]} />
      </mesh>

      {/* 2. Back Wall */}
      <mesh position={[0, 2.0, -3.15]} receiveShadow material={mats.backWall}>
        <boxGeometry args={[6.4, 4.0, 0.1]} />
      </mesh>

      {/* 3. Left Wall with Large Architectural Window */}
      <mesh position={[-3.15, 2.0, -2.1]} material={mats.sideWall}>
        <boxGeometry args={[0.1, 4.0, 2.0]} />
      </mesh>
      <mesh position={[-3.15, 2.0, 2.1]} material={mats.sideWall}>
        <boxGeometry args={[0.1, 4.0, 2.0]} />
      </mesh>
      <mesh position={[-3.15, 3.5, 0]} material={mats.sideWall}>
        <boxGeometry args={[0.1, 1.0, 2.4]} />
      </mesh>
      <mesh position={[-3.15, 0.3, 0]} material={mats.sideWall}>
        <boxGeometry args={[0.1, 0.6, 2.4]} />
      </mesh>

      {/* Window Glazing & Mullions */}
      <mesh position={[-3.15, 1.9, 0]} material={mats.windowGlass}>
        <boxGeometry args={[0.02, 2.6, 2.4]} />
      </mesh>
      <mesh position={[-3.14, 1.9, 0]} material={mats.windowFrame}>
        <boxGeometry args={[0.04, 2.6, 0.05]} />
      </mesh>
      <mesh position={[-3.14, 1.9, 0]} material={mats.windowFrame}>
        <boxGeometry args={[0.04, 0.05, 2.4]} />
      </mesh>

      {/* Backdrop */}
      <mesh position={[-3.8, 1.9, 0]}>
        <planeGeometry args={[4, 3.5]} />
        <meshBasicMaterial color="#0E2140" />
      </mesh>

      {/* 4. Ceiling */}
      <mesh position={[0, 4.0, 0]} material={mats.ceiling}>
        <boxGeometry args={[6.4, 0.1, 6.4]} />
      </mesh>

      {/* 5. Modern Designer L-Shape Sofa */}
      <mesh position={[0.2, 0.32, -1.0]} material={mats.sofa} castShadow receiveShadow>
        <boxGeometry args={[3.0, 0.38, 1.2]} />
      </mesh>
      <mesh position={[1.2, 0.32, 0.1]} material={mats.sofa} castShadow receiveShadow>
        <boxGeometry args={[1.0, 0.38, 1.2]} />
      </mesh>
      <mesh position={[0.2, 0.72, -1.5]} material={mats.sofa} castShadow>
        <boxGeometry args={[3.0, 0.46, 0.28]} />
      </mesh>
      <mesh position={[-1.35, 0.62, -1.0]} material={mats.sofa} castShadow>
        <boxGeometry args={[0.24, 0.32, 1.2]} />
      </mesh>

      {/* Cushions */}
      <mesh position={[-0.8, 0.65, -1.25]} rotation={[0.1, 0.2, 0]} material={mats.cushion}>
        <boxGeometry args={[0.45, 0.45, 0.15]} />
      </mesh>
      <mesh position={[0.3, 0.65, -1.25]} rotation={[-0.05, -0.15, 0]} material={mats.cushion}>
        <boxGeometry args={[0.45, 0.45, 0.15]} />
      </mesh>
      <mesh position={[1.1, 0.65, -0.6]} rotation={[0.05, 0.3, 0]} material={mats.cushion}>
        <boxGeometry args={[0.42, 0.42, 0.15]} />
      </mesh>

      {/* 6. Sculptural Low Coffee Table */}
      <mesh position={[-0.2, 0.3, 0.2]} material={mats.coffeeTable} castShadow receiveShadow>
        <cylinderGeometry args={[0.75, 0.75, 0.08, 32]} />
      </mesh>
      <mesh position={[-0.2, 0.14, 0.2]} material={mats.tableLegs}>
        <cylinderGeometry args={[0.25, 0.35, 0.24, 16]} />
      </mesh>

      {/* 7. Floor Lamp */}
      <group position={[-2.2, 0, -1.6]}>
        <mesh position={[0, 0.03, 0]} material={mats.lampPole}>
          <cylinderGeometry args={[0.22, 0.22, 0.04, 24]} />
        </mesh>
        <mesh position={[0, 1.2, 0]} material={mats.lampPole}>
          <cylinderGeometry args={[0.02, 0.02, 2.4, 16]} />
        </mesh>
        <mesh position={[0.3, 2.35, 0]} rotation={[0, 0, Math.PI / 4]} material={mats.lampPole}>
          <cylinderGeometry args={[0.02, 0.02, 0.6, 16]} />
        </mesh>
        <mesh position={[0.55, 2.15, 0]} material={mats.lampShade}>
          <coneGeometry args={[0.26, 0.32, 24]} />
        </mesh>
        <pointLight
          ref={lampRef}
          position={[0.55, 2.05, 0]}
          intensity={1.8}
          distance={4.5}
          color="#FFD6A5"
          castShadow={false}
        />
      </group>

      {/* 8. Artwork */}
      <group position={[-0.4, 2.4, -3.08]}>
        <mesh material={mats.artFrame}>
          <boxGeometry args={[1.64, 1.14, 0.04]} />
        </mesh>
        <mesh position={[0, 0, 0.02]} material={mats.artCanvas}>
          <boxGeometry args={[1.5, 1.0, 0.02]} />
        </mesh>
        <mesh position={[0.2, 0, 0.035]} material={mats.cushion}>
          <boxGeometry args={[0.4, 0.7, 0.01]} />
        </mesh>
      </group>

      {/* 9. Ambient Ceiling Spots */}
      <pointLight position={[0, 3.8, 0]} intensity={1.2} distance={6} color={currentTheme.lightWarmth} />
      <pointLight position={[1.5, 3.8, -1.0]} intensity={0.9} distance={5} color="#FFF5EA" />
    </group>
  );
}

// Fallback
function InteriorFallback({ themeKey }: { themeKey: InteriorThemeKey }) {
  const current = THEMES[themeKey];
  return (
    <div className="w-full h-full flex flex-col items-center justify-center p-8 bg-[#0B1B3D]/10 backdrop-blur-sm">
      <div className="max-w-md w-full bg-white rounded-2xl p-6 shadow-md border border-[#D0DCEB] text-center">
        <div className="w-12 h-12 rounded-full bg-[#0B1B3D] text-[#C69A27] flex items-center justify-center mx-auto mb-3">
          <Palette className="w-6 h-6" />
        </div>
        <h4 className="font-serif text-xl font-bold text-[#151C28]">{current.name}</h4>
        <p className="text-sm text-[#536279] mt-2">{current.subtitle}</p>
        <p className="text-xs text-[#C69A27] font-bold tracking-wide uppercase mt-4">
          Interactive 3D Interior Studio
        </p>
      </div>
    </div>
  );
}

export const Interior3DExperience: React.FC = () => {
  const [activeTheme, setActiveTheme] = useState<InteriorThemeKey>('navy-gold');
  const [isAutoRotate, setIsAutoRotate] = useState<boolean>(true);
  const controlsRef = useRef<any>(null);

  const resetCamera = () => {
    if (controlsRef.current) {
      controlsRef.current.reset();
    }
  };

  const handleDiscussClick = () => {
    const selectedThemeName = THEMES[activeTheme].name;
    const msg = `Hello NKR Properties & Interiors, I explored your 3D Interior Experience (${selectedThemeName}) on your website. I would like to discuss interior design solutions for my home in Bengaluru. Could we schedule a consultation?`;
    window.open(createWhatsAppUrl(msg), '_blank', 'noopener,noreferrer');
  };

  return (
    <section id="interiors-3d" className="py-24 bg-[#F2F6FC] relative overflow-hidden border-t border-[#D0DCEB]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12 text-left">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#0B1B3D]/10 text-[#0B1B3D] text-xs font-bold uppercase tracking-wider mb-3 border border-[#0B1B3D]/15">
            <Sparkles className="w-3.5 h-3.5 text-[#C69A27]" />
            <span>Interactive 3D Interior Experience</span>
          </div>

          <p className="font-script text-xl text-[#C69A27] font-medium mb-1">
            "{BUSINESS_INFO.tagline}"
          </p>

          <h2 className="editorial-headline text-3xl sm:text-4xl lg:text-5xl text-[#151C28] font-normal tracking-tight">
            Experience Interior Proportions & Colorways.
          </h2>
          <p className="mt-4 text-[#536279] text-base sm:text-lg leading-relaxed">
            Rotate the room, inspect materials, and explore how bespoke colorways influence spatial warmth. NKR translates these concepts into reality.
          </p>
        </div>

        {/* 3D Interactive Canvas Container */}
        <div className="relative rounded-3xl overflow-hidden bg-[#E2EAF5] border border-[#D0DCEB] shadow-xl min-h-[500px] lg:min-h-[620px] flex flex-col">
          
          {/* Top Control Bar */}
          <div className="absolute top-4 left-4 right-4 z-20 flex flex-wrap items-center justify-between gap-3 pointer-events-none">
            
            {/* Theme Swatches */}
            <div className="pointer-events-auto flex items-center gap-1.5 p-1.5 bg-white/95 backdrop-blur-md rounded-2xl border border-[#D0DCEB] shadow-sm">
              {(Object.keys(THEMES) as InteriorThemeKey[]).map((key) => {
                const theme = THEMES[key];
                const isActive = activeTheme === key;
                return (
                  <button
                    key={key}
                    onClick={() => setActiveTheme(key)}
                    className={`px-3 py-1.5 rounded-xl text-xs font-semibold transition-all flex items-center gap-2 ${
                      isActive
                        ? 'bg-[#0B1B3D] text-white shadow-sm border border-[#C69A27]/40'
                        : 'text-[#151C28] hover:bg-[#EEF2F6]'
                    }`}
                    aria-label={`Select ${theme.name}`}
                  >
                    <span
                      className="w-2.5 h-2.5 rounded-full border border-black/20"
                      style={{ backgroundColor: theme.sofaColor }}
                    />
                    <span className="hidden sm:inline">{theme.name.split(' & ')[0]}</span>
                  </button>
                );
              })}
            </div>

            {/* Interaction Action Tools */}
            <div className="pointer-events-auto flex items-center gap-2">
              <button
                onClick={() => setIsAutoRotate(!isAutoRotate)}
                className={`px-3 py-1.5 rounded-xl text-xs font-bold backdrop-blur-md border border-[#D0DCEB] transition-all flex items-center gap-1.5 shadow-sm ${
                  isAutoRotate
                    ? 'bg-[#0B1B3D] text-white'
                    : 'bg-white/95 text-[#151C28] hover:bg-white'
                }`}
                title="Toggle slow auto-rotation"
              >
                <Compass className="w-3.5 h-3.5" />
                <span className="hidden md:inline">{isAutoRotate ? 'Rotating' : 'Static'}</span>
              </button>

              <button
                onClick={resetCamera}
                className="p-2 rounded-xl text-xs font-medium bg-white/95 text-[#151C28] hover:bg-white backdrop-blur-md border border-[#D0DCEB] shadow-sm transition-all"
                title="Reset Camera View"
                aria-label="Reset Camera"
              >
                <RotateCcw className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          {/* 3D Canvas */}
          <div className="relative w-full h-[460px] sm:h-[520px] lg:h-[580px]">
            <Suspense fallback={<InteriorFallback themeKey={activeTheme} />}>
              <Canvas
                shadows
                camera={{ position: [3.8, 2.6, 4.2], fov: 42 }}
                gl={{ antialias: true, alpha: true, powerPreference: 'high-performance' }}
                className="cursor-grab active:cursor-grabbing w-full h-full"
              >
                <ambientLight intensity={0.9} color="#FFFBF5" />
                <directionalLight
                  position={[-7, 8, 4]}
                  intensity={2.2}
                  color="#FFF2DC"
                  castShadow
                  shadow-mapSize-width={1024}
                  shadow-mapSize-height={1024}
                />
                <directionalLight
                  position={[5, 4, -3]}
                  intensity={0.6}
                  color="#D0DCEB"
                />

                <InteriorRoomScene themeKey={activeTheme} />

                <OrbitControls
                  ref={controlsRef}
                  enableDamping
                  dampingFactor={0.06}
                  autoRotate={isAutoRotate}
                  autoRotateSpeed={0.8}
                  minDistance={2.5}
                  maxDistance={7.5}
                  minPolarAngle={Math.PI / 4}
                  maxPolarAngle={Math.PI / 2.05}
                  target={[0, 0.4, 0]}
                />
              </Canvas>
            </Suspense>

            {/* Bottom floating hint badge */}
            <div className="absolute bottom-4 left-4 z-10 flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#0B1B3D]/90 backdrop-blur-md text-[11px] text-white select-none border border-[#C69A27]/40 shadow-md">
              <span className="w-1.5 h-1.5 rounded-full bg-[#C69A27] animate-ping" />
              <span>Orbit to inspect room materials</span>
              <span className="text-[#C69A27]">|</span>
              <span className="text-[#E8EEF7]/70">Pinch or scroll to zoom</span>
            </div>
          </div>

          {/* Bottom Card Summary & CTA */}
          <div className="p-6 sm:p-8 bg-white border-t border-[#D0DCEB] flex flex-col md:flex-row md:items-center justify-between gap-6 text-left">
            <div>
              <div className="flex items-center gap-2">
                <span className="text-xs uppercase font-bold tracking-wider text-[#C69A27]">
                  Colorway Theme
                </span>
                <span className="text-xs text-[#536279]">•</span>
                <span className="text-xs font-bold text-[#0B1B3D]">
                  {THEMES[activeTheme].name}
                </span>
              </div>
              <p className="text-sm text-[#536279] mt-1 max-w-xl">
                {THEMES[activeTheme].subtitle}
              </p>
            </div>

            <button
              onClick={handleDiscussClick}
              className="inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-full bg-[#0B1B3D] text-white hover:bg-[#061024] transition-all font-bold text-xs tracking-wider uppercase group shrink-0 shadow-md border border-[#C69A27]/40"
            >
              <span>Discuss Your Interior Requirements</span>
              <ArrowRight className="w-4 h-4 text-[#C69A27] transition-transform group-hover:translate-x-1" />
            </button>
          </div>
        </div>

      </div>
    </section>
  );
};
export default Interior3DExperience;
