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
  .component('main-a', {
    controller: MainA,
    templateUrl: 'component/main-a.html',
  })
  .component('main-b', {
    controller: MainB,
    templateUrl: 'component/main-b.html',
  });
