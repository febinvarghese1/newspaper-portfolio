import React from "react";
import Separator from "./separator";
import Monitor from "@/assets/images/illustrations/monitor.jpg";

const QuoteSection = () => {
  return (
    <div className="w-full px-4 sm:px-6 lg:px-8 pb-20 md:pb-28">
      <Separator height={5} width={100} color="black" verticalSpacing={2} />
      <Separator height={1} width={100} color="black" />
      
      <h1 className="text-4xl text-center sm:text-6xl md:text-8xl lg:text-[10rem] leading-[1] font-[lucian] pt-8 sm:pt-10 lg:pt-12 pb-12 sm:pb-16 lg:pb-20 px-2">
        "Pixels are our paint. The browser, our canvas." - FV
      </h1>
      
      <div className="flex flex-col lg:flex-row gap-6 sm:gap-8 lg:gap-10 justify-center">
        <div className="flex flex-col gap-4 sm:gap-6 w-full xl:w-auto">
          <img
            src={Monitor.src}
            alt="quote"
            className="w-full max-w-[580px] h-[200px] sm:h-[250px] md:h-[280px] lg:h-[320px] object-cover border-4 border-black mx-auto lg:mx-0"
          />

          <div className="w-full max-w-[580px] mx-auto lg:mx-0">
            <Separator
              height={2}
              width={100}
              color="black"
              verticalSpacing={4}
            />

            <div className="font-[clarendon] text-base sm:text-lg max-w-xl leading-relaxed">
              <p className="mb-4 sm:mb-6">
                Somewhere between design and development, a quiet truth echoes:{" "}
                <span className="font-bold italic">
                  "We shape with code, but it's in the browser that our work
                  truly breathes."
                </span>{" "}
                A simple idea that captures the heart of digital craftsmanship.
              </p>

              <p className="mb-4 sm:mb-6">
                Like screen sculptors, developers and designers use color,
                motion, and interaction—not just to make things look good, but
                to make them feel right. Every bit of layout or CSS is part of a
                larger story told visually and intuitively.
              </p>
              
              <p className="mb-4 sm:mb-6">
                The browser is no longer just a window—it's where design lives.
                With HTML, CSS, and JavaScript, we shape experiences people
                remember. It's a canvas in motion.
              </p>

              <p className="mb-4 sm:mb-6">
                This mindset blurs the line between engineer and artist. It's
                more than writing code—it's crafting moments, guiding focus, and
                sparking connection.
              </p>
            </div>
          </div>
        </div>
    
        <div className="font-[clarendon] w-full xl:w-auto text-base sm:text-lg leading-relaxed max-w-xl mx-auto lg:mx-0">
          <p className="mb-4 sm:mb-6">
            Frontend isn’t where the product ends—it’s where the experience
            begins. It’s where code meets emotion, and the invisible becomes
            unforgettable.
          </p>

          <p className="mb-4 sm:mb-6">
            Great interfaces aren’t flashy—they’re dependable. The magic of
            frontend is in the small things, done right. When it works, it just
            feels natural.
          </p>

          <p className="mb-4 sm:mb-6">
            Frontend is empathy in code. It's preventing frustration before it
            starts, guiding users without effort. When done right, it
            disappears—but leaves a mark.
          </p>

          <p className="mb-4 sm:mb-6">
            Frameworks may change, but one truth stays: the best frontend
            developers bring clarity. They simplify the complex and make tech
            feel human.
          </p>

          <Separator height={2} width={100} color="black" verticalSpacing={4} />
        </div>
      </div>
    </div>
  );
};

export default QuoteSection;
