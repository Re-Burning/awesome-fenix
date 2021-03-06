# 服务网格

:::tip 服务网格（Service Mesh）

A service mesh is a dedicated infrastructure layer for handling service-to-service communication. It’s responsible for the reliable delivery of requests through the complex topology of services that comprise a modern, cloud native application. In practice, the service mesh is typically implemented as an array of lightweight network proxies that are deployed alongside application code, without the application needing to be aware.

服务网格是一种用于管控服务间通信的的基础设施，职责是为现代云原生应用支持网络请求在复杂的拓扑环境中可靠地传递。在实践中，服务网格通常会以轻量化网络代理的形式来体现，这些代理与应用程序代码会部署在一起，对应用程序来说，它完全不会感知到代理的存在。

:::right

—— [What's A Service Mesh? And Why Do I Need One?](https://buoyant.io/2017/04/25/whats-a-service-mesh-and-why-do-i-need-one/)，Willian Morgan，Buoyant CEO，2017

:::

容器编排系统所管控的最细粒度只能到达容器层次，在此粒度之下的技术细节，仍然只能依赖程序员自己来管理，编排系统很难提供有效的支持。2016年，原Twitter基础设施工程师William Morgan和Oliver Gould在GitHub上发布了第一代的服务网格产品Linkerd，并在很短的时间内围绕着Linkered组建了Buoyant公司，担任CEO的Willian Morgan发表的文章《[What's A Service Mesh? And Why Do I Need One?](https://buoyant.io/2017/04/25/whats-a-service-mesh-and-why-do-i-need-one/)》中首次使用了“服务网格”（Service Mesh）一词，此后，服务网格作为一种新兴通讯理念迅速传播，越来越频繁地出现在各个公司以及技术社区的视野中。之所以服务网格能够获得企业与社区的重视，就是因为它很好地弥补了容器编排系统对分布式应用细粒度管控能力高不足的缺憾。

服务网格并不是神秘的黑科技，它只是一种处理程序间通讯的基础设施，典型的存在形式是部署在应用旁边，一对一为应用服务的边车代理，及管理这些代理的控制程序。“[边车](https://en.wikipedia.org/wiki/Sidecar)”（Sidecar）是常见的[容器设计模式](https://www.usenix.org/sites/default/files/conference/protected-files/hotcloud16_slides_burns.pdf)之一，用来形容某种外挂在容器身上的辅助程序。容器化盛行以前，边车代理就已有了成功的应用案例，譬如2014年的[Netflix Prana](https://github.com/Netflix/Prana)项目，由于Netfilix OSS套件均是用Java语言开发的，为了让非JVM语言的微服务，譬如以Python、Node.js编写的程序也同样能接入Netfilix OSS生态，享受到Eureka、Ribbon、Hystrix等框架的支持，Netflix建立了Prana，它的作用是提供一个独立的HTTP Endpoint，让非JVM语言的程序通过访问该Endpoint来完成诸如获取既定服务所有实例的信息、获取的相关路由节点、获取系统配置参数等功能。

服务网格在容器的刻意支持下，将边车代理的功能强制化，使用类似网络攻击里中间人流量劫持的手段，完全透明（即无需程序知晓并主动访问）地接管掉容器与外界的通讯，借此将管理的粒度从容器级别细化到了每个单独的远程服务级别，使得基础设施干涉应用、介入程序行为的能力大幅增强。这样，云原生希望用基础设施接管应用非功能性需求的主旨目标就能更进一步，从容器粒度发展到每个远程网络访问，分布式应用继容器和容器编排后，又发掘出另一块更广袤的舞台空间。

