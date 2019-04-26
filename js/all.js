class Header {
}
class Footer {
}
class AppMenu {
}
class MainA {
}
class MainB {
}
class MainC {
  wrap = false;
}
class Incl {
}

angular.module('mainApp', [])
  .component('app-header', {
    controller: Header,
    templateUrl: 'component/header.html',
  })
  .component('app-footer', {
    controller: Footer,
    templateUrl: 'component/footer.html',
  })
  .component('app-menu', {
    controller: AppMenu,
    templateUrl: 'component/app-menu.html',
  })
  .component('mainA', {
    controller: MainA,
    templateUrl: 'component/main-a.html',
  })
  .component('main-b', {
    controller: MainB,
    templateUrl: 'component/main-b.html',
  })
  .component('main-c', {
    controller: MainC,
    templateUrl: 'component/main-c.html',
  })
  .component('incl', {
    controller: Incl,
    templateUrl: function($element, $attrs) {
      return 'component/'+ $attrs.content + '.html';
    }
  })

