function SignatureSection() {
  return (
    <section id="signature" className="border-t border-amber-200 bg-white">
      <div className="mx-auto w-full max-w-7xl px-4 py-12 sm:px-6 md:py-16 lg:px-8">
        <div className="mb-8 md:mb-10">
          <p className="mb-2 text-xs font-semibold uppercase tracking-[0.25em] text-amber-700 sm:text-sm">
            Signature Selections
          </p>
          <h2 className="text-2xl font-bold text-amber-950 sm:text-3xl md:text-4xl">
            Breads, cakes, and pastries made for everyday cravings and special
            occasions
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-4 sm:gap-5 md:grid-cols-2 lg:grid-cols-3 lg:gap-6">
          <article className="rounded-3xl border border-amber-100 bg-amber-50 p-5 shadow-sm sm:p-6">
            <h3 className="mb-2 text-lg font-semibold text-amber-900 sm:text-xl">
              Fresh Bread
            </h3>
            <p className="text-sm leading-6 text-stone-600 sm:text-base">
              매일 즐기기 좋은 다양한 베이커리 스타일의 빵을 소개하는 영역
            </p>
          </article>

          <article className="rounded-3xl border border-amber-100 bg-amber-50 p-5 shadow-sm sm:p-6">
            <h3 className="mb-2 text-lg font-semibold text-amber-900 sm:text-xl">
              Celebration Cakes
            </h3>
            <p className="text-sm leading-6 text-stone-600 sm:text-base">
              특별한 날과 소중한 순간에 어울리는 케이크 카테고리
            </p>
          </article>

          <article className="rounded-3xl border border-amber-100 bg-amber-50 p-5 shadow-sm sm:p-6">
            <h3 className="mb-2 text-lg font-semibold text-amber-900 sm:text-xl">
              Pastries & Treats
            </h3>
            <p className="text-sm leading-6 text-stone-600 sm:text-base">
              간편하게 즐기기 좋은 패스트리와 디저트 셀렉션
            </p>
          </article>
        </div>
      </div>
    </section>
  );
}

export default SignatureSection;