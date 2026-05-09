"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import ContactCTA from '@/components/sections/contact/ContactCTA';
import FaqSplitMedia from '@/components/sections/faq/FaqSplitMedia';
import FeatureCardTwentyFive from '@/components/sections/feature/FeatureCardTwentyFive';
import FooterCard from '@/components/sections/footer/FooterCard';
import HeroBillboardRotatedCarousel from '@/components/sections/hero/HeroBillboardRotatedCarousel';
import MediaAbout from '@/components/sections/about/MediaAbout';
import NavbarStyleFullscreen from '@/components/navbar/NavbarStyleFullscreen/NavbarStyleFullscreen';
import SocialProofOne from '@/components/sections/socialProof/SocialProofOne';
import TestimonialCardThirteen from '@/components/sections/testimonial/TestimonialCardThirteen';
import { Award, Heart, Sparkles } from "lucide-react";

export default function LandingPage() {
  return (
    <ThemeProvider
        defaultButtonVariant="hover-bubble"
        defaultTextAnimation="reveal-blur"
        borderRadius="pill"
        contentWidth="small"
        sizing="mediumLargeSizeMediumTitles"
        background="aurora"
        cardStyle="glass-elevated"
        primaryButtonStyle="gradient"
        secondaryButtonStyle="radial-glow"
        headingFontWeight="light"
    >
      <ReactLenis root>
  <div id="nav" data-section="nav">
      <NavbarStyleFullscreen
      navItems={[
        { name: "Home", id: "hero" },
        { name: "Message", id: "about" },
        { name: "Memories", id: "features" },
        { name: "Contact", id: "contact" },
      ]}
      brandName="Mom's Special Day"
    />
  </div>

  <div id="hero" data-section="hero">
      <HeroBillboardRotatedCarousel
      background={{ variant: "rotated-rays-static" }}
      title="Happy Mother's Day"
      description="To the woman who gave me everything. Thank you for your endless love, patience, and kindness. This site is just a small token of my appreciation."
      buttons={[{ text: "See Your Surprise", href: "#about" }]}
      carouselItems={[
        { id: "1", imageSrc: "http://img.b2bpic.net/free-photo/tender-african-woman-florist-smiling-holding-bouquet-alstroemerias-white-wall-closed-eyes_176420-12311.jpg", imageAlt: "happy mother holding bouquet of flowers" },
        { id: "2", imageSrc: "http://img.b2bpic.net/free-photo/arrangement-beautiful-flowers-background_23-2149057029.jpg", imageAlt: "flowers bouquet for mothers day" },
        { id: "3", imageSrc: "http://img.b2bpic.net/free-photo/tender-couple-with-coffee-bed_23-2148227398.jpg", imageAlt: "mother enjoying coffee morning light" },
        { id: "4", imageSrc: "http://img.b2bpic.net/free-photo/male-model-posing-outdoors_23-2148872336.jpg", imageAlt: "loving mother and daughter hug" },
        { id: "5", imageSrc: "http://img.b2bpic.net/free-photo/view-thank-you-note-notebook_23-2149706825.jpg", imageAlt: "handwritten thank you card" },
        { id: "6", imageSrc: "http://img.b2bpic.net/free-photo/mother-son-outdoors-sunset-with-copy-space_1249-612.jpg", imageAlt: "beautiful sunset family silhouette" },
      ]}
    />
  </div>

  <div id="about" data-section="about">
      <MediaAbout
      useInvertedBackground={true}
      title="To My Dearest Mom"
      description="Mom, your presence has been the foundation of my life. You've taught me how to be kind, strong, and brave. On this special day, I want to celebrate you and everything you do."
      imageSrc="http://img.b2bpic.net/free-photo/side-view-woman-shooting-with-projector_23-2149424926.jpg"
      imageAlt="caring mother portrait warm smile"
    />
  </div>

  <div id="features" data-section="features">
      <FeatureCardTwentyFive
      animationType="depth-3d"
      textboxLayout="default"
      useInvertedBackground={false}
      features={[
        {
          title: "Endless Patience",          description: "You always knew how to stay calm and guide me.",          icon: Sparkles,
          mediaItems: [
            { imageSrc: "http://img.b2bpic.net/free-photo/red-yarn-heart-shaped-wall-background_1150-6952.jpg", imageAlt: "heart icon" },
            { imageSrc: "http://img.b2bpic.net/free-photo/dried-flower-window-shadow-floral-background_53876-160632.jpg", imageAlt: "flower icon" },
          ]
        },
        {
          title: "Unconditional Love",          description: "Your love is the safest place I know.",          icon: Heart,
          mediaItems: [
            { imageSrc: "http://img.b2bpic.net/free-photo/big-star-with-bulb-lights-small-one-concrete-wall-background-loft-interior-decor_8353-8324.jpg", imageAlt: "star icon" },
            { imageSrc: "http://img.b2bpic.net/free-photo/red-gift-with-arms-legs_1156-129.jpg", imageAlt: "gift box icon" },
          ]
        },
        {
          title: "Incredible Wisdom",          description: "Your advice has shaped who I am today.",          icon: Award,
          mediaItems: [
            { imageSrc: "http://img.b2bpic.net/free-vector/set-hipster-labels_23-2147505686.jpg", imageAlt: "ribbon icon" },
            { imageSrc: "http://img.b2bpic.net/free-vector/gold-line-light-glow-with-sparkle-flare-shine-horizontal-golden-neon-streak-effect-isolated-transparent-background-magic-flash-laser-strip-divider-with-glitter-shimmer-design-illustration_107791-22438.jpg", imageAlt: "sparkle icon" },
          ]
        },
      ]}
      title="Why You're Simply Amazing"
      description="The little things you do make the biggest difference."
    />
  </div>

  <div id="testimonials" data-section="testimonials">
      <TestimonialCardThirteen
      animationType="depth-3d"
      textboxLayout="split"
      useInvertedBackground={true}
      testimonials={[
        { id: "1", name: "Always kind", handle: "My Hero", testimonial: "You taught me to see the best in everyone.", rating: 5 },
        { id: "2", name: "Constant support", handle: "My Rock", testimonial: "You believed in me when I didn't.", rating: 5 },
        { id: "3", name: "Unmatched warmth", handle: "My Sunshine", testimonial: "Your smile lights up my whole world.", rating: 5 },
        { id: "4", name: "Selfless giver", handle: "My Guide", testimonial: "You sacrifice so much just to make me smile.", rating: 5 },
        { id: "5", name: "Always listening", handle: "My Friend", testimonial: "I can talk to you about absolutely anything.", rating: 5 },
        { id: "6", name: "Simply you", handle: "My Mom", testimonial: "You are exactly who I aspire to be.", rating: 5 },
      ]}
      showRating={true}
      title="What Makes You Special"
      description="A collection of reasons why you are the best mom ever."
    />
  </div>

  <div id="faq" data-section="faq">
      <FaqSplitMedia
      textboxLayout="split"
      useInvertedBackground={false}
      faqs={[
        { id: "q1", title: "Do you know how much I love you?", content: "More than the stars in the sky." },
        { id: "q2", title: "Who is my favorite person?", content: "You, always and forever." },
        { id: "q3", title: "What is the best part of my day?", content: "Talking to you." },
      ]}
      imageSrc="http://img.b2bpic.net/free-photo/portrait-young-attractive-family-with-little-baby-son-posing-beautiful-autumn-pine-forest-sunny-day-handsome-man-his-pretty-brunette-wife_1328-3826.jpg"
      mediaAnimation="slide-up"
      faqsAnimation="slide-up"
      title="Sweet Notes for You"
      description="Answers to the most important things on my mind."
    />
  </div>

  <div id="socialProof" data-section="socialProof">
      <SocialProofOne
      textboxLayout="default"
      useInvertedBackground={true}
      names={["Love", "Kindness", "Patience", "Grace", "Strength", "Wisdom", "Joy"]}
      title="The Pillars of Our Bond"
      description="Values you've instilled in me every single day."
    />
  </div>

  <div id="contact" data-section="contact">
      <ContactCTA
      useInvertedBackground={false}
      background={{ variant: "sparkles-gradient" }}
      tag="Let's Celebrate"
      title="Sending You All My Love"
      description="I hope you have the most beautiful day, Mom. You deserve all the happiness in the world."
      buttons={[{ text: "Click for a Special Surprise", onClick: () => alert('Sending a giant virtual hug to mom!') }]}
    />
  </div>

  <div id="footer" data-section="footer">
      <FooterCard
      logoText="With Love from Your Child"
      copyrightText="© 2025 | Mother's Day Celebration"
    />
  </div>
      </ReactLenis>
    </ThemeProvider>
  );
}