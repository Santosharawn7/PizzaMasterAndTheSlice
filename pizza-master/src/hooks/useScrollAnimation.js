import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

export const useScrollAnimation = (options = {}) => {
  const elementRef = useRef(null);
  const {
    animation = 'fadeInUp',
    delay = 0,
    duration = 1,
    stagger = 0.1,
    trigger = null,
    start = 'top 80%',
    end = 'bottom 20%',
    toggleActions = 'play none none reverse'
  } = options;

  useEffect(() => {
    if (!elementRef.current) return;

    const element = elementRef.current;
    const triggerElement = trigger || element;

    // Set initial state based on animation type
    const setInitialState = () => {
      switch (animation) {
        case 'fadeInUp':
          gsap.set(element, { opacity: 0, y: 50 });
          break;
        case 'fadeInDown':
          gsap.set(element, { opacity: 0, y: -50 });
          break;
        case 'fadeInLeft':
          gsap.set(element, { opacity: 0, x: -50 });
          break;
        case 'fadeInRight':
          gsap.set(element, { opacity: 0, x: 50 });
          break;
        case 'fadeIn':
          gsap.set(element, { opacity: 0 });
          break;
        case 'scaleIn':
          gsap.set(element, { opacity: 0, scale: 0.8 });
          break;
        case 'slideInUp':
          gsap.set(element, { y: 100, opacity: 0 });
          break;
        default:
          gsap.set(element, { opacity: 0, y: 50 });
      }
    };

    // Create animation based on type
    const createAnimation = () => {
      const tl = gsap.timeline({ delay });
      
      switch (animation) {
        case 'fadeInUp':
          tl.to(element, { opacity: 1, y: 0, duration, ease: 'power2.out' });
          break;
        case 'fadeInDown':
          tl.to(element, { opacity: 1, y: 0, duration, ease: 'power2.out' });
          break;
        case 'fadeInLeft':
          tl.to(element, { opacity: 1, x: 0, duration, ease: 'power2.out' });
          break;
        case 'fadeInRight':
          tl.to(element, { opacity: 1, x: 0, duration, ease: 'power2.out' });
          break;
        case 'fadeIn':
          tl.to(element, { opacity: 1, duration, ease: 'power2.out' });
          break;
        case 'scaleIn':
          tl.to(element, { opacity: 1, scale: 1, duration, ease: 'back.out(1.7)' });
          break;
        case 'slideInUp':
          tl.to(element, { y: 0, opacity: 1, duration, ease: 'power2.out' });
          break;
        default:
          tl.to(element, { opacity: 1, y: 0, duration, ease: 'power2.out' });
      }
      
      return tl;
    };

    // Set initial state
    setInitialState();

    // Create scroll trigger
    const scrollTrigger = ScrollTrigger.create({
      trigger: triggerElement,
      start,
      end,
      toggleActions,
      animation: createAnimation(),
    });

    // Cleanup
    return () => {
      scrollTrigger.kill();
    };
  }, [animation, delay, duration, stagger, trigger, start, end, toggleActions]);

  return elementRef;
};

// Hook for animating multiple elements with stagger
export const useStaggerAnimation = (options = {}) => {
  const containerRef = useRef(null);
  const {
    selector = '.animate-item',
    animation = 'fadeInUp',
    delay = 0,
    duration = 0.8,
    stagger = 0.2,
    start = 'top 80%',
    end = 'bottom 20%',
    toggleActions = 'play none none reverse'
  } = options;

  useEffect(() => {
    if (!containerRef.current) return;

    const container = containerRef.current;
    const elements = container.querySelectorAll(selector);

    if (elements.length === 0) return;

    // Set initial state
    elements.forEach((element) => {
      switch (animation) {
        case 'fadeInUp':
          gsap.set(element, { opacity: 0, y: 50 });
          break;
        case 'fadeInDown':
          gsap.set(element, { opacity: 0, y: -50 });
          break;
        case 'fadeInLeft':
          gsap.set(element, { opacity: 0, x: -50 });
          break;
        case 'fadeInRight':
          gsap.set(element, { opacity: 0, x: 50 });
          break;
        case 'scaleIn':
          gsap.set(element, { opacity: 0, scale: 0.8 });
          break;
        default:
          gsap.set(element, { opacity: 0, y: 50 });
      }
    });

    // Create animation
    const tl = gsap.timeline({ delay });
    
    switch (animation) {
      case 'fadeInUp':
        tl.to(elements, { 
          opacity: 1, 
          y: 0, 
          duration, 
          stagger,
          ease: 'power2.out' 
        });
        break;
      case 'fadeInDown':
        tl.to(elements, { 
          opacity: 1, 
          y: 0, 
          duration, 
          stagger,
          ease: 'power2.out' 
        });
        break;
      case 'fadeInLeft':
        tl.to(elements, { 
          opacity: 1, 
          x: 0, 
          duration, 
          stagger,
          ease: 'power2.out' 
        });
        break;
      case 'fadeInRight':
        tl.to(elements, { 
          opacity: 1, 
          x: 0, 
          duration, 
          stagger,
          ease: 'power2.out' 
        });
        break;
      case 'scaleIn':
        tl.to(elements, { 
          opacity: 1, 
          scale: 1, 
          duration, 
          stagger,
          ease: 'back.out(1.7)' 
        });
        break;
      default:
        tl.to(elements, { 
          opacity: 1, 
          y: 0, 
          duration, 
          stagger,
          ease: 'power2.out' 
        });
    }

    // Create scroll trigger
    const scrollTrigger = ScrollTrigger.create({
      trigger: container,
      start,
      end,
      toggleActions,
      animation: tl,
    });

    // Cleanup
    return () => {
      scrollTrigger.kill();
    };
  }, [selector, animation, delay, duration, stagger, start, end, toggleActions]);

  return containerRef;
};
