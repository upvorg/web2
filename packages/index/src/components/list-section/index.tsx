import VideoCard from '../video-card'
import './index.scss'

interface ListSectionProps {
  title: string
  videos: R.Post[]|null
  asideTitle?: string
  aside?: React.ReactNode
  moreUrl?: string
}

export default function ListSection({
  title,
  videos,
  asideTitle,
  aside,
  moreUrl
}: ListSectionProps) {
  return (
    <div className={`upv-grid ${!!asideTitle ? 'col-2' : ''}`}>
      <div className="upv-card-list">
        <div className="list-header">
          <h2>{title}</h2>
          {moreUrl &&videos&& videos.length > 0 && (
            <a href={moreUrl} target="_blank">
              更多
              <svg
                width="10"
                height="10"
                viewBox="0 0 9 9"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="channel-entry-more__link--arrow"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M7.50588 3.40623C7.40825 3.3086 7.24996 3.3086 7.15232 3.40623L4.41244 6.14612L1.67255 3.40623C1.57491 3.3086 1.41662 3.3086 1.31899 3.40623C1.22136 3.50386 1.22136 3.66215 1.31899 3.75978L4.11781 6.5586C4.28053 6.72132 4.54434 6.72132 4.70706 6.5586L7.50588 3.75978C7.60351 3.66215 7.60351 3.50386 7.50588 3.40623Z"
                  fill="currentColor"
                ></path>
                <path
                  d="M7.15232 3.40623L7.50588 3.75978L7.50588 3.75978L7.15232 3.40623ZM7.50588 3.40623L7.15232 3.75978L7.15233 3.75978L7.50588 3.40623ZM4.41244 6.14612L4.05888 6.49967C4.15265 6.59344 4.27983 6.64612 4.41244 6.64612C4.54504 6.64612 4.67222 6.59344 4.76599 6.49967L4.41244 6.14612ZM1.67255 3.40623L2.0261 3.05268L2.0261 3.05268L1.67255 3.40623ZM1.31899 3.40623L0.965439 3.05268L0.965439 3.05268L1.31899 3.40623ZM1.31899 3.75978L1.67255 3.40623V3.40623L1.31899 3.75978ZM4.11781 6.5586L3.76425 6.91215L4.11781 6.5586ZM4.70706 6.5586L4.35351 6.20505L4.70706 6.5586ZM7.50588 3.75978L7.15233 3.40623L7.15232 3.40623L7.50588 3.75978ZM7.50588 3.75978C7.40825 3.85742 7.24996 3.85742 7.15232 3.75978L7.85943 3.05268C7.56654 2.75978 7.09166 2.75978 6.79877 3.05268L7.50588 3.75978ZM4.76599 6.49967L7.50588 3.75978L6.79877 3.05268L4.05888 5.79257L4.76599 6.49967ZM1.31899 3.75978L4.05888 6.49967L4.76599 5.79257L2.0261 3.05268L1.31899 3.75978ZM1.67254 3.75979C1.57491 3.85742 1.41662 3.85742 1.31899 3.75979L2.0261 3.05268C1.73321 2.75978 1.25833 2.75978 0.965439 3.05268L1.67254 3.75979ZM1.67255 3.40623C1.77018 3.50386 1.77018 3.66215 1.67255 3.75978L0.965439 3.05268C0.672546 3.34557 0.672546 3.82044 0.965439 4.11334L1.67255 3.40623ZM4.47136 6.20505L1.67255 3.40623L0.965439 4.11334L3.76425 6.91215L4.47136 6.20505ZM4.35351 6.20505C4.38605 6.1725 4.43882 6.1725 4.47136 6.20505L3.76425 6.91215C4.12223 7.27013 4.70264 7.27013 5.06062 6.91215L4.35351 6.20505ZM7.15232 3.40623L4.35351 6.20505L5.06062 6.91215L7.85943 4.11334L7.15232 3.40623ZM7.15233 3.75978C7.05469 3.66215 7.05469 3.50386 7.15233 3.40623L7.85943 4.11334C8.15233 3.82045 8.15233 3.34557 7.85943 3.05268L7.15233 3.75978Z"
                  fill="currentColor"
                ></path>
              </svg>
            </a>
          )}
        </div>
        <div className="list-body">
          {videos ? (
            videos.length > 0 ? (
              videos.map((item, index) => <VideoCard key={index} info={item} />)
            ) : (
              <div className="empty">暂无数据</div>
            )
          ) : (
            <span className="loading empty">加载中···</span>
          )}
        </div>
      </div>

      {!!asideTitle && (
        <aside>
          <div className="aside-header">
            <div className="aside-title">{asideTitle}</div>
            {/* <div>更多</div> */}
          </div>
          <div className="aside-body">{aside}</div>
        </aside>
      )}
    </div>
  )
}
