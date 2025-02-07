const data = [
  {
    id: 4715,
    name: '带你从入门到实战全面掌握 uni-app',
    description:
      '本课程将带读者使用 uni-app 技术栈，开发一个具有前后端的完整实战项目，让读者在实践中学习，在学习中夯实开发能力。读者将学到登录、注册、修改个人信息等基础功能的开发知识，也能学到发布、创建、删除待办事项、动态发帖等核心功能的编程思想。纸上得来终觉浅，得知此事要躬行。一起实践下吧！',
    price: 8900,
  },
  {
    id: 4452,
    name: '初中级前端工程师面试宝典',
    description:
      '本课程从教你制作一份「漂亮」的简历开始，将对初中级前端开发工程师在面试过程中遇到的问题进行分类并进行逐一展开讲解。课程内容涵盖从 HTML  及 CSS 基础到前端主流的 Vue / React 框架，还包括如何与 HR 谈薪拿 offer，上面的内容是不是都是你关心的呢？快来开始学习吧~',
    price: 4900,
  },
  {
    id: 4848,
    name: '微信公众号开发入门',
    description:
      '微信已成为很多人生活的一部分，在庞大用户量的基础下，微信公众号开发也变得热门了。本课程带领大家从 0 到 1 进行微信公众号开发。',
    price: 3900,
  },
  {
    id: 4150,
    name: '从零入门 React 通关指北',
    description:
      '本门课程将带你从0入门 React 开发，包括函数组件与 class 组件的使用、Hooks 系统基础、以及在实际开发过程中常用的第三方库和丰富的项目实例，怎么样准备好了么？快来开启 React 开发之旅吧！',
    price: 8900,
  },
  {
    id: 3869,
    name: 'Flask 框架基础',
    description:
      'Python 作为一门优秀的编程语言，在很多领域可以发挥其作用，其中一个广泛使用的领域就是 Web 开发。所谓 Web 开发指的是编写 Web 应用程序用于处理 Web 请求。Python 的语言特性使得自身编写 Web 框架极其容易，以至于现在有上百种 Python 编写的 Web 开发框架。本课程我们使用 Flask 框架来学习 Web 开发。',
    price: 9800,
  },
  {
    id: 3871,
    name: 'JavaScript 从零构建音乐播放器',
    description:
      '本实验采用原生 JavaScript 搭建类似网易云的音乐播放器。应用到的技术包括 ES6 新增的语法糖如解构赋值、箭头函数、展开运算符模板字符串 ，异步处理 Promise，ES6 模块化，异步网络请求 Ajax，单页面应用思想，数据响应式思想。通过上述技术最终完成页面切换，轮播图，音乐播放器等功能。',
    price: 8900,
  },
  {
    id: 3991,
    name: '微信小程序开发入门',
    description:
      '本门课程将带你快速入门微信小程序开发，包括如何搭建开发环境、小程序基础语法以及在开发过程中常用的组件与常用 API 的使用，准备好了么？快来开启微信小程序开发之旅吧！',
    price: 1490,
  },
  {
    id: 4830,
    name: 'SpringBoot+Thymeleaf 开发 BBS 论坛',
    description:
      'Spring Boot 是近几年来 Java 社区最有影响力之一的项目，该技术栈已经成为每一位 Java 开发者在技术道路上打怪升级所必要的技能包。本课程会带领大家一步步的了解并熟悉 Spring Boot，并最终收获一个 BBS 论坛项目的实战开发过程。如果你准备学习 Spring Boot 框架、用 Spring Boot 进行项目开发，或者想要自己开发一个论坛项目，那么这个课程非常适合你。',
    price: 13900,
  },
  {
    id: 3574,
    name: 'Vue.js 3 + Node.js 实现线上聊天室',
    description:
      '本次课程将基于 Vue 3、Node.js、MongoDB 及 Socket.io 实现一个聊天室包含整个项目的前后端以及部署知识。\n\n课程前期以讲解 Vue 3 在项目中的使用，自定义属于自己的 Vue 组件库、Vue 3 开发避坑。后期将涉及 Node.js 后端开发、websocket 、MongoDB 的使用、以及如何搭建后端脚手架，同时会讲解如何在云服务中部署项目等。',
    price: 8800,
  },
  {
    id: 3954,
    name: 'Express.js 实现前后端分离的博客系统',
    description:
      'Node.js 是近年来最热门的后端服务器，它的 Express.js 框架是其中最热门的框架。本项目我们使用 Node.js 的 Express.js 框架，以及持久层框架 mongoose，以及数据库 MongoDB，前后端安全校验 JWT，前端 Vue.js 框架。通过这些框架组合，完成一个前后端分离的个人小 Blog 系统。学习该课程可以入门 Node.js 领域的知识，学习掌握 Express.js 相关知识，还可以作为面试实战项目。',
    price: 8900,
  },
  {
    id: 3472,
    name: '经典项目：前后端分离网盘系统实战',
    description:
      '本课程主要使用 Spring Boot 2 和 Vue CLI@4 来开发 Web 端网盘系统。Spring Boot 如今已成为 Java 开发必学技术，可以大大简化 Spring 应用的初始搭建以及开发过程；前端将使用 Vue CLI@4，结合当下受欢迎的 Element UI 快速完成网盘页面布局。',
    price: 8900,
  },
  {
    id: 3326,
    name: '21 个实验带你快速开发 Django 博客系统',
    description:
      '本课程介绍如何使用 Django 框架快速开发线上博客系统，并通过 Nginx + uWsgi + Supervisor 部署到云服务器的生产环境中。项目还使用 Bootstrap 和 AdminLTE 框架分解搭建博客系统的前端展示页面和后台管理系统。通过本课程，我们可以快速掌握 Django 的项目开发流程，Django 的中间件的高级用法，包括集成 AdminLTE、使用 Redis 提速网站访问和使用 Nginx 、uWsgi 、Supervisor 部署 Django 项目到云服务器中等操作。',
  },
  {
    id: 3597,
    name: 'React Hook 打造精美在线记账本',
    description:
      '前端更新速度日新月异，随着 React 和 Typescript 的日益成熟，越来越多的大厂更愿意采用 React 和 Typescript 的组合技术栈。本门课程会对 Typescript 和 React Hook 做一个快速入门的讲解，并通过实际的线上记账软件开发和大家一起感受 React + Typescript 的魅力。',
    price: 8900,
  },
  {
    id: 3484,
    name: 'Vue.js 3 + Vite 2 开发浏览器插件集',
    description:
      '本课程主要使用 Vue.js 3 + Vite  最新技术从零开始开发一款谷歌浏览器插件，包括如何使用 Vue.js 3 创建项目、项目的常见配置，以及 Manifest 文件的常见配置，学完本套课程可以让前端开发者快速了解浏览器插件的运行原理及快速上手浏览器插件开发，同时本套课程对 Vue.js 3 的新特性做了大量的讲解，所有功能均通过 Vue.js 3 新语法开发，所以本套教程也是学习 Vue.js 3 的绝佳课程。',
    price: 5900,
  },
  {
    id: 3314,
    name: 'Three.js 在网页中创建 3D 动画',
    description:
      'Three.js 作为一款前端 3D 引擎，其应用范围越来越广，不管是房产网站的 3D 看房，还是购物网站的 3D 模型预览,都能用到 Three.js。在本门课程中，我们提供了大量的实验环节，让你通过实验学习 Three.js，其中就包括 360 度全景空间预览，地月环绕系统，3D 地图，粒子系统特效等。这些案例能帮助你快速学习 Three.js ，并掌握其中的基础知识。Three.js 已成为前端工程师的一项特殊技能，在面试过程中能让面试官眼前一亮，助你升职加薪！',
    price: 6400,
  },
  {
    id: 2843,
    name: 'Web 前端高级开发技术',
    description:
      '本课程为 Web 前端初级开发技术进阶课程，可以通过本课程学习包括 ES6 和 Less 基础语法，Node.js 基础入门、Express 的使用、webpack 的使用。同时，我们还会学习流行框架 Vue 和 React 的基础特性等。',
    price: 16900,
  },
];

const listElement = document.getElementById('list');
let currentPage = 1;
const itemsPerPage = 5;
const totalPages = Math.ceil(data.length / itemsPerPage);

function updatelist(PageNumber) {
  const startIndex = (PageNumber - 1) * itemsPerPage;
  const endIndex = Math.min(startIndex + itemsPerPage, data.length);
  listElement.innerHTML = '';

  for (let i = startIndex; i < endIndex; i++) {
    const course = data[i];
    const listItem = document.createElement('a');
    listItem.className = 'list-group-item list-group-item-action';
    listItem.innerHTML = `
      <div class="d-flex w-100 justify-content-between">
        <h5 class="mb-1">${course.name}</h5>
        <small>${(course.price / 100).toFixed(2)}元</small>
      </div>
      <p class="mb-1">${course.description}</p>
    `;
    listElement.appendChild(listItem);
  }

  document.getElementById('pagination').innerHTML = `当前页码: ${PageNumber} / 总页码: ${totalPages}`;

  toggleDisabled();
}

function toggleDisabled() {
  prev.classList.toggle('disabled', currentPage === 1);
  next.classList.toggle('disabled', currentPage === totalPages);
}

// 点击上一页
let prev = document.getElementById('prev');
prev.onclick = function () {
  if (currentPage > 1) {
    currentPage--;
    updatelist(currentPage);
  }
};

// 点击下一页
let next = document.getElementById('next');
next.onclick = function () {
  if (currentPage < totalPages) {
    currentPage++;
    updatelist(currentPage);
  }
};

// 初始化页面，显示第一页内容
updatelist(currentPage);
