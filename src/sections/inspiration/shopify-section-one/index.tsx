export function ShopifySectionOne() {
  return (
    <section className="py-20 container relative hidden md:block after:absolute after:h-full after:w-full after:top-0 after:left-0 after:-z-[1] after:blur-[100px] after:bg-[length:30%] after:bg-shopify-section-one-bg">
      <div className="!max-w-[1452px] container">
        <div className="grid grid-cols-12 gap-4">
          <div className="col-span-3 flex flex-col">
            <div className="aspect-[64/100] h-full rounded-xl bg-gray-400 w-[112px] self-end mb-6"></div>
            <div className="aspect-[64/100] h-full rounded-xl bg-orange-300 w-[208px] self-start"></div>
            <div className="aspect-[64/100] h-full rounded-xl bg-red-300 w-[160px] self-center relative -top-6 left-12"></div>
          </div>
          <div className="col-span-6 flex items-center justify-center py-16">
            <div className="text-center">
              <h2 className="mb-4 text-base font-semibold uppercase md:mb-8">
                MERCHANT OBSESSED
              </h2>
              <p className="font-bold tracking-tighter [&>span]:block [&>span]:whitespace-nowrap [&_.mo-shopify]:px-1 [&_.mo-shopify]:leading-[1.1] [&_.mo-shopify]:inline-block [&_.mo-shopify]:text-transparent [&_.mo-shopify]:bg-clip-text [&_.mo-shopify]:bg-shopify-section-one-text md:text-7xl min-[1020px]:text-8xl min-[1450px]:text-9xl">
                <span>Meet</span>
                <span>the people</span>
                <span>who chose</span>
                <span className="mo-shopify">Shopify</span>
              </p>
            </div>
          </div>
          <div className="col-span-3 flex flex-col">
            <div className="aspect-[64/100] h-full rounded-xl bg-gray-400 w-[112px] self-start mb-6"></div>
            <div className="aspect-[64/100] h-full rounded-xl bg-orange-300 w-[208px] self-end"></div>
            <div className="aspect-[64/100] h-full rounded-xl bg-red-300 w-[160px] self-center relative -top-6 right-12"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
