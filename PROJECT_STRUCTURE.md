福彩3D工具项目的计算逻辑主要分为以下几个核心部分：

## 一、数据读取逻辑
### 1. 数据来源
从 aa.xlsx Excel 文件读取历史 3D 彩票数据：

- A 列 ：期号和
- C 列 ：和值
- D-F 列 ：开奖号（百位、十位、个位）
- H-J 列 ：试机号（百位、十位、个位）
- K 列 ：试机号和值
- L 列 ：其他信息
### 2. 数据预处理
- 自动识别完整数据行和仅试机号数据行
- 智能解析多种格式的数据（标准格式、简写格式等）
- 为缺失数据提供默认值
## 二、核心分析算法
### 1. 开奖号差 10 分析（A 间隔 N 期 A±10）
```
# 逻辑：找到第 i 期和值为 A，第 i+N+1 期
和值为 B
# 如果 |B - A| == 10，则记录一次匹配
for i in range(max_index):
    if sums[i] == sum_a and abs(sums
    [i + gap + 1] - sum_a) == 10:
        count += 1
        # 记录上下文详情
```
### 2. 开奖号差 0 分析（A 间隔 N 期 A）
```
# 逻辑：找到第 i 期和值为 A，第 i+N+1 期
和值也为 A
# 如果 sums[i] == sums[i + gap + 
1]，则记录一次匹配
for i in range(max_index):
    if sums[i] == sum_a and sums[i 
    + gap + 1] == sum_a:
        count += 1
```
## 三、上下文详情展示
### 1. 上下文结构
每次匹配展示三栏数据：

- 第一栏 ：A 和值之前的数据（26 行）
- 第二栏 ：A 和值本身及间隔期数据
- 第三栏 ：B 和值（A±10 或 A）之后的数据（26 行）
### 2. 标记规则
- 开始标记行 （ctx-mark-start）：A 和值所在行
- 结束标记行 （ctx-mark-end）：B 和值所在行
## 四、标色逻辑
### 1. 标色判断条件
```
# 对于每个和值 A，找到最后一处匹配的结束标
记行
# 计算从该行到数据末尾的剩余行数
rows_from_end = len(sums) - 
last_end_index

# 如果剩余行数 < 20，则该和值需要标色
if rows_from_end < 20:
    highlighted_sums.append(sum_a)
```
### 2. 标色流程
1. 用户点击分析 → 发送请求到后端
2. 后端分析数据 → 计算每个和值的"最后一栏"从结束标记行到数据末尾的行数
3. 判断是否标色 → 如果行数 < 20，则将该和值加入 highlighted_sums 列表
4. 返回结果 → 将 highlighted_sums 随统计数据一起返回
5. 前端渲染 → 根据 highlighted_sums 列表为对应的行添加 highlighted-row 类
6. CSS 生效 → 带有 highlighted-row 类的行显示红色高亮样式
## 五、数据流架构
```
用户界面 (index.html)
    ↓
    JavaScript (main.js)
    ↓
    Flask API 路由 (analysis_routes.
    py)
    ↓
    业务逻辑层 (analysis_service.py)
    ↓
    核心算法层 
    (sum_interval_analyzer.py)
    ↓
    数据源 (aa.xlsx)
```
## 六、关键配置参数
- 间隔期数 (gap) ：用户指定的间隔期数 N
- 上下文行数 (context_above) ：A 和值之前展示的行数（默认 26）
- 尾部行数 (tail_rows) ：B 和值之后展示的行数（默认 26）
- 标色阈值 ：剩余行数 < 20 时标色