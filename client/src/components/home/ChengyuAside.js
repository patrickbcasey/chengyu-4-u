
const ChengyuData = ({ chinese, english }) => {
  return (
    <li className="mx-5 my-8">
        <p lang="zh-hant" className="text-sm">{chinese}</p>
        <p className="text-sm">{english}</p>
    </li>
  )

}

const ChengyuAside = ( {chengyu} ) => {

  return (
    <section className="border basis-6/12 bg-[#d3d3d3]">
        <h1 className="m-4 border-b border-primary pb-2 text-lg text-center">Random Chengyu</h1>
        <ul>
            { chengyu && chengyu.map(chengyu => (
              <ChengyuData key={chengyu._id} chinese={chengyu.chinese + ' ' + chengyu.jyutping} english={chengyu.meaning}/>
            ))}
        </ul>
    </section>
  )
}
export default ChengyuAside