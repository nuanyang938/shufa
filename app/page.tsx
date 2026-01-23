export default function HomePage() {
  return (
    <div className="main-content">
      {/* 内容容器 - 用于并排显示目录和图片 */}
      <div className="content-container">
        {/* 古文雅集目录 */}
        <div className="directory-container">
          
          <h1 className="directory-title">古文雅集目录</h1>
          
          <div className="directory-main">
            <div className="directory-chapter">
              <h2 className="chapter-title">
                <span className="chapter-number">一</span>先秦文選
              </h2>
              <div className="chapter-content">
                <ul className="directory-list">
                  <li><a href="#" className="directory-link"><span className="volume-label">卷一</span>莊子·逍遙遊</a></li>
                  <li><a href="#" className="directory-link"><span className="volume-label">卷二</span>莊子·秋水篇</a></li>
                  <li><a href="#" className="directory-link"><span className="volume-label">卷三</span>論語·學而篇</a></li>
                  <li><a href="#" className="directory-link"><span className="volume-label">卷四</span>孟子·告子上</a></li>
                  <li><a href="#" className="directory-link"><span className="volume-label">卷五</span>荀子·勸學篇</a></li>
                  <li><a href="#" className="directory-link"><span className="volume-label">卷六</span>道德經·一章</a></li>
                </ul>
              </div>
            </div>
            
            <div className="section-divider"></div>
            
            <div className="directory-chapter">
              <h2 className="chapter-title">
                <span className="chapter-number">二</span>漢魏文選
              </h2>
              <div className="chapter-content">
                <ul className="directory-list">
                  <li><a href="#" className="directory-link"><span className="volume-label">卷七</span>史記·項羽本紀</a></li>
                  <li><a href="#" className="directory-link"><span className="volume-label">卷八</span>出師表·諸葛亮</a></li>
                  <li><a href="#" className="directory-link"><span className="volume-label">卷九</span>洛神賦·曹植</a></li>
                  <li><a href="#" className="directory-link"><span className="volume-label">卷十</span>典論·論文</a></li>
                  <li><a href="#" className="directory-link"><span className="volume-label">卷十一</span>與山巨源絕交書</a></li>
                  <li><a href="#" className="directory-link"><span className="volume-label">卷十二</span>陳情表·李密</a></li>
                </ul>
              </div>
            </div>
            
            <div className="section-divider"></div>
            
            <div className="directory-chapter">
              <h2 className="chapter-title">
                <span className="chapter-number">三</span>唐宋文選
              </h2>
              <div className="chapter-content">
                <ul className="directory-list">
                  <li><a href="#" className="directory-link"><span className="volume-label">卷十三</span>師說·韓愈</a></li>
                  <li><a href="#" className="directory-link"><span className="volume-label">卷十四</span>陋室銘·劉禹錫</a></li>
                  <li><a href="#" className="directory-link"><span className="volume-label">卷十五</span>阿房宮賦·杜牧</a></li>
                  <li><a href="#" className="directory-link"><span className="volume-label">卷十六</span>岳陽樓記·范仲淹</a></li>
                </ul>
              </div>
            </div>
            
            <div className="section-divider"></div>
          </div>
        </div>
        
        {/* 图片展示区域 */}
        <div className="image-container">
          <div className="corner-decoration corner-tl"></div>
          <div className="corner-decoration corner-tr"></div>
          <div className="corner-decoration corner-bl"></div>
          <div className="corner-decoration corner-br"></div>
          <div className="image-gallery">
            <img src="/gallery/临江仙.jpg" alt="书法艺术" className="gallery-image" />
          </div>
        </div>
      </div>
    </div>
  );
}
