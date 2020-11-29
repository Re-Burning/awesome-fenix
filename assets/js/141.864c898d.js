(window.webpackJsonp=window.webpackJsonp||[]).push([[141],{655:function(t,e,r){"use strict";r.r(e);var o=r(11),i=Object(o.a)({},(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[r("h1",{attrs:{id:"目的：微服务的驱动力"}},[t._v("目的：微服务的驱动力")]),t._v(" "),r("div",{staticClass:"custom-block tip"},[r("p",{staticClass:"custom-block-title"},[t._v("微服务的目的")]),t._v(" "),r("p",[t._v("The goal of microservices is to sufficiently decompose the application in order to facilitate agile application development and deployment.")]),t._v(" "),r("p",[t._v("微服务的目的是有效的拆分应用，实现敏捷开发和部署。")]),t._v(" "),r("div",{staticClass:"custom-block right"},[r("p",[t._v("—— "),r("a",{attrs:{href:"https://www.nginx.com/people/chris-richardson/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Chris Richardson"),r("OutboundLink")],1),t._v(", Founder of CloudFoundry, "),r("a",{attrs:{href:"https://www.nginx.com/blog/introduction-to-microservices/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Introduction to Microservices"),r("OutboundLink")],1)])])]),t._v(" "),r("p",[t._v("在讨论什么时候开始、以及如何向微服务迁移之前，我们先来理清为什么要迈向微服务。凡事总该先有目的，有预期收益再谈行动才显得合理。有人会说迈向微服务的目的是为了追求更先进的架构形式。这话对，但没有什么信息量可言，任何一次架构演进的目的都是为了更加先进，应该没谁是为“追求落后”而重构系统的。有人会说微服务是信息系统发展的必然阶段，为了应对日益庞大的压力，获得更好的性能，自然会演进至能够扩缩自如的微服务架构，这个观点看似合理、具体、正确，实则争议颇大。笔者个人的态度是旗帜鲜明地反对以“获得更高性能”为目的将系统重构为微服务架构的，性能有可能会作为辅助性的理由，但仅仅为了性能而进行微服务的话，那应该是40年前“"),r("RouterLink",{attrs:{to:"/architecture/architect-history/primitive-distribution.html"}},[t._v("原始分布式时代")]),t._v("”所追求的目标。现代的单体系统同样会采用可扩缩的设计，同样能够集群部署，更重要的是云计算数据中心的处理能力几乎可以认为是无限的，那能够通过扩展硬件的手段解决问题就尽量别使用复杂的软件方法，其中原因在前面引用的《没有银弹》中已经解释过："),r("strong",[t._v("硬件的成本能够持续稳定地下降，而软件开发的成本则不可能")]),t._v("。此外，性能也不会因为采用了微服务架构而凭空产生。把系统拆成多个微服务，一旦在某个关键地方依然卡住了业务流程，其整体的结果往往还不如单体，没有清晰的职责划分，导致扩展性失效，多加机器往往还不如单机。前面这句话将性能替换为代码质量、生产力等词语往往也同样适用，这些方面笔者就不再展开了。")],1),t._v(" "),r("p",[t._v("软件系统选择微服务架构，通常比较常见的、合理的驱动力来自组织外部、内部两方面，笔者先列举一些外部因素：")]),t._v(" "),r("ul",[r("li",[t._v("当意识到没有什么技术能够包打天下。"),r("br"),t._v("举个具体例子，某个系统选用了处于"),r("a",{attrs:{href:"https://www.tiobe.com/tiobe-index/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Tiobe排行榜"),r("OutboundLink")],1),t._v("榜首多年的Java语言来开发，也会遇到很多想做但Java不擅长的事情。譬如想去做人工智能，进行深度学习时，发现大量的库和开源代码都离不开Python；想要引入分布式协调工具时，发现近几年ZooKeeper已经有被后起之秀Golang的Etcd蚕食替代的趋势；想要做集中式缓存，发现无可争议的首选是ANSI C编写的Redis，等等。很多时候为异构能力进行的分布式部署，并不是你想或者不想的问题，而是无可避免的。")]),t._v(" "),r("li",[t._v("当个人能力因素成为系统发展的明显制约。"),r("br"),t._v("对于北上广深的信息技术企业这个问题可能不会成为主要矛盾，在其他地区，不少软件公司即使有钱也很难招到大量的靠谱的高端开发者。此时，无论是引入外包团队，抑或是让少量技术专家带着大量普通水平的开发者去共同完成一个大型系统，微服务都是一个更有潜力的选择。在单体架构下，没有什么有效阻断错误传播的手段，系统中“整体”与“部分”的关系没有物理的划分，系统质量只能靠研发与项目管理措施来尽可能地保障，少量的技术专家很难阻止大量螺丝钉式的程序员或者不熟悉原有技术架构的外包人员在某个不起眼的地方犯错并产生全局性的影响，并不容易做出整体可靠的大型系统。这时微服务可以作为专家掌控架构约束力的技术手段，由高水平的开发、运维人员去保证关键的技术和业务服务靠谱，其他大量外围的功能即使不靠谱（默认它们必定不靠谱），也能保证整体的稳定和局部的容错、自愈与快速迭代。")]),t._v(" "),r("li",[t._v("当遇到来自外部商业层面对内部技术层面提出的要求。"),r("br"),t._v("对于那些以“自产自销”为主的互联网公司来说这一点体验不明显，但对于很多为企业提供信息服务的软件公司来说，甲方爸爸的要求往往才是具决定性的推动力。技术、需求上困难也许能变通克服，但当微服务架构变成大型系统先进性的背书时，甲方的招投标文件技术规范明文要求系统必须支持微服务架构、支持分布式部署，那就没有多少讨价还价的余地。")]),t._v(" "),r("li",[t._v("……")])]),t._v(" "),r("p",[t._v("在系统和研发团队内部，也会有一些因素促使其向微服务靠拢：")]),t._v(" "),r("ul",[r("li",[r("p",[t._v("变化发展特别快的创新业务系统往往会自主地向微服务架构靠近。"),r("br"),t._v("需求喊着“要试错！要拥抱变化！”，开发喊着“资源永远不够！活干不完！”，运维喊着“你见过凌晨四点的洛杉矶吗！”，对于那种“一个功能上线平均活不过三天”的系统，如果团队本身能力能够支撑在合理的代价下让功能有快速迭代的可能，让代码能避免在类库层面的直接依赖而导致纠缠不清，让系统有更好的可观测性和回弹性（自愈能力），需求、开发、运维肯定都是很乐意接受微服务的，毕竟此时大家的利益一致，微服务自然会水到渠成。")])]),t._v(" "),r("li",[r("p",[t._v("大规模的、业务复杂的、历史包袱沉重的系统也可能主动向微服务架构靠近。这类系统最后的结局不外乎三种："),r("br"),t._v("第一种是日渐臃肿，客户忍了，系统持续维持着，直到谁也替代不了却又谁也维护不了。笔者曾听说过国外有公司招聘60、70岁以上程序员去维护上个世纪的COBOL编写的系统，没有求证过这到底是网络段子还是确有其事。"),r("br"),t._v("第二种是日渐臃肿，客户忍不了了，痛下决心，宁愿付出一段时间内业务双轨运行，忍受在新、旧系统上重复操作，期间业务发生震荡甚至短暂停顿的代价，也要将整套旧系统彻底淘汰掉，第二种情况笔者亲眼看见过不少。"),r("br"),t._v("第三种是日渐臃肿，客户忍不了，系统也很难淘汰。此时迫于外部压力，微服务会作为一种能够将系统部分地拆除、修改、更新、替换的技术方案被严肃地论证，若在重构阶段有足够靠谱的技术人员参与，该大型系统的应用代码和数据库都逐渐分离独立，直至孵化出一个个可替换可重生的微服务，微服务的先驱Netflix曾在多次演讲中介绍说自己公司属于第三种的成功案例。")])]),t._v(" "),r("li",[r("p",[t._v("……")])])]),t._v(" "),r("p",[t._v("以上列举的这些内外部原因并不是全部，促使你的产品最终选择微服务的具体理由可能是多种多样，你做出先微服务迈进的决策时肯定经过恰当的权衡，认为收益大于成本。微服务最主要的目的是对系统进行有效的拆分，实现物理层面的隔离。微服务的核心价值就是拆分之后的系统能够让局部的单个服务"),r("strong",[t._v("有可能")]),t._v("实现敏捷地卸载、部署、开发、升级。局部的持续更迭，是系统整体具备Phoenix特性的必要条件。")])])}),[],!1,null,null,null);e.default=i.exports}}]);