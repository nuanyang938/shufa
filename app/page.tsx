import ImageCarousel from '@/components/ImageCarousel';

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

            <div className="directory-chapter">
              <h2 className="chapter-title">
                <span className="chapter-number">四</span>元明清文選
              </h2>
              <div className="chapter-content">
                <ul className="directory-list">
                  <li><a href="#" className="directory-link"><span className="volume-label">卷十七</span>桃花源記·陶淵明</a></li>
                  <li><a href="#" className="directory-link"><span className="volume-label">卷十八</span>西廂記·王實甫</a></li>
                  <li><a href="#" className="directory-link"><span className="volume-label">卷十九</span>牡丹亭·湯顯祖</a></li>
                  <li><a href="#" className="directory-link"><span className="volume-label">卷二十</span>長生殿·洪昇</a></li>
                  <li><a href="#" className="directory-link"><span className="volume-label">卷二十一</span>聊齋誌異·蒲松齡</a></li>
                  <li><a href="#" className="directory-link"><span className="volume-label">卷二十二</span>紅樓夢·曹雪芹</a></li>
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
          <ImageCarousel />
        </div>

        {/* 书法碑帖列表 */}
        <div className="stelae-container">
          <div className="corner-decoration corner-tl"></div>
          <div className="corner-decoration corner-tr"></div>
          <div className="corner-decoration corner-bl"></div>
          <div className="corner-decoration corner-br"></div>
          <h2 className="stelae-title">书法碑帖</h2>
          <ul className="stelae-list">
            <li className="stelae-item">
              <span className="stelae-name">兰亭序</span>
              <span className="stelae-author">王羲之</span>
            </li>
            <li className="stelae-item">
              <span className="stelae-name">九成宫醴泉铭</span>
              <span className="stelae-author">欧阳询</span>
            </li>
            <li className="stelae-item">
              <span className="stelae-name">多宝塔碑</span>
              <span className="stelae-author">颜真卿</span>
            </li>
            <li className="stelae-item">
              <span className="stelae-name">玄秘塔碑</span>
              <span className="stelae-author">柳公权</span>
            </li>
            <li className="stelae-item">
              <span className="stelae-name">洛神赋十三行</span>
              <span className="stelae-author">王献之</span>
            </li>
            <li className="stelae-item">
              <span className="stelae-name">圣教序</span>
              <span className="stelae-author">褚遂良</span>
            </li>
            <li className="stelae-item">
              <span className="stelae-name">张迁碑</span>
              <span className="stelae-author">东汉</span>
            </li>
            <li className="stelae-item">
              <span className="stelae-name">礼器碑</span>
              <span className="stelae-author">东汉</span>
            </li>
            <li className="stelae-item">
              <span className="stelae-name">颜勤礼碑</span>
              <span className="stelae-author">颜真卿</span>
            </li>
            <li className="stelae-item">
              <span className="stelae-name">孔子庙堂碑</span>
              <span className="stelae-author">虞世南</span>
            </li>
            <li className="stelae-item">
              <span className="stelae-name">雁塔圣教序</span>
              <span className="stelae-author">褚遂良</span>
            </li>
            <li className="stelae-item">
              <span className="stelae-name">乙瑛碑</span>
              <span className="stelae-author">东汉</span>
            </li>
            <li className="stelae-item">
              <span className="stelae-name">曹全碑</span>
              <span className="stelae-author">东汉</span>
            </li>
            <li className="stelae-item">
              <span className="stelae-name">泰山刻石</span>
              <span className="stelae-author">李斯</span>
            </li>
            <li className="stelae-item">
              <span className="stelae-name">瘗鹤铭</span>
              <span className="stelae-author">南朝</span>
            </li>
            <li className="stelae-item">
              <span className="stelae-name">石门颂</span>
              <span className="stelae-author">东汉</span>
            </li>
            <li className="stelae-item">
              <span className="stelae-name">张猛龙碑</span>
              <span className="stelae-author">北魏</span>
            </li>
            <li className="stelae-item">
              <span className="stelae-name">峄山刻石</span>
              <span className="stelae-author">李斯</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
