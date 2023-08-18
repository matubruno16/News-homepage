

export const NewArticle = ({title, text}) => {
  return (
    <article className="h-[140px] lg:h-[160px] border-b-[1px] border-GrayIshBlue py-4 last:border-none lg:pt-3">
        <h2 className="cursor-pointer hover:text-SoftOrange text-[20px] mb-3 font-bold lg:text-[16px] xl:text-[20px]">{title}</h2>
        <p className="text-[15px]">{text}</p>
    </article>
  )
}
