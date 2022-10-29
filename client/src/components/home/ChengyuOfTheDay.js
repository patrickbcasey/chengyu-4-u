const ChengyuOfTheDay = ( {chengyu} ) => {
  
    return (
      <section className="border rounded-lg basis-1/3">
          <div className="h-14 bg-primary flex items-center justify-center">
            <h1 className="text-center text-base-100 text-xl">Chengyu of the Day</h1>
          </div>
          <p className="my-2 lg:ml-5">{chengyu && chengyu[0].chinese}</p>
          <p className="my-2 lg:ml-5">{chengyu &&chengyu[0].jyutping}</p>
          <p className="mt-8 mb-2 lg:ml-5">{chengyu && chengyu[0].literal}</p>
          <p className="my-2 lg:ml-5">{chengyu && chengyu[0].meaning}</p>
      </section>
    )
}
export default ChengyuOfTheDay