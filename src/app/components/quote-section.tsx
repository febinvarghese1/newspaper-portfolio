import React from "react";
import Separator from "./separator";
import Monitor from "@/assets/images/illustrations/monitor.jpg";

const QuoteSection = () => {
  return (
    <div className="w-full px-4 sm:px-6 lg:px-8">
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
                Somewhere between design and development, a quiet truth echoes
                among frontend creators:{" "}
                <span className="font-bold italic">
                  "We shape with code, but it's in the browser that our work
                  truly breathes."
                </span>
                A simple idea, yet one that captures the soul of digital
                craftsmanship.
              </p>

              <p className="mb-4 sm:mb-6">
                Like sculptors of the screen, developers and designers work with
                color, motion, and interaction. Not just to make things look
                good, but to make them feel right. Every line of CSS, every bit
                of layout logic, is part of a larger story being told. Visually,
                responsively, intuitively.
              </p>
              
              <p className="mb-4 sm:mb-6">
                The browser used to be just a window to the web. Now, it's where
                design lives and breathes in real time. With HTML, CSS, and
                JavaScript as our tools, the browser becomes a living canvas.
                One where structure, style, and interaction blend to create
                digital experiences that people not only use, but remember.
              </p>

              <p className="mb-4 sm:mb-6">
                This way of thinking blurs the line between engineering and
                artistry. It's not just about writing functional code. It's
                about composing feelings, guiding attention, and crafting
                moments that click with users.
              </p>
            </div>
          </div>
        </div>
    
          <div className="font-[clarendon] w-full xl:w-auto text-base sm:text-lg leading-relaxed max-w-xl mx-auto lg:mx-0">
          <p className="mb-4 sm:mb-6">
            In this light, the frontend isn't just where the product ends. It's
            where the experience begins. It's where code meets emotion, and
            where the invisible becomes unforgettable.
          </p>

          <p className="mb-4 sm:mb-6">
            A good interface isn't something people admire. It's something they
            trust. The magic of frontend lies not in flashy animations, but in
            the quiet assurance that everything just works. That every
            interaction has been thought through. That someone cared enough to
            sweat the small stuff.
          </p>

          <p className="mb-4 sm:mb-6">
            Frontend is empathy in code. It's anticipating frustration before it
            happens. It's making sure a user never has to guess, never has to
            reload, never feels lost. When done right, it's invisible—but deeply
            felt.
          </p>

          <p className="mb-4 sm:mb-6">
            And as technologies shift, frameworks come and go, this truth stays:
            the best frontend developers don't just write UI—they write clarity.
            They translate chaos into calm. They make the complex feel simple,
            and the digital feel human.
          </p>

          <Separator height={2} width={100} color="black" verticalSpacing={4} />
          <div className="pb-20" />
        </div>
      </div>
    </div>
  );
};

export default QuoteSection;
