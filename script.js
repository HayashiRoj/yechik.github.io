document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.getElementById('menuToggle');
    const menuList = document.getElementById('menuList');
    
    // 菜单切换功能
    menuToggle.addEventListener('click', function() {
        this.classList.toggle('active');
        menuList.classList.toggle('active');
    });
    
    // 点击菜单项后关闭菜单
    const menuItems = document.querySelectorAll('.menu-list a');
    menuItems.forEach(item => {
        item.addEventListener('click', function() {
            menuToggle.classList.remove('active');
            menuList.classList.remove('active');
        });
    });
    
    // 点击页面其他区域关闭菜单
    document.addEventListener('click', function(e) {
        if (!menuToggle.contains(e.target) && !menuList.contains(e.target)) {
            menuToggle.classList.remove('active');
            menuList.classList.remove('active');
        }
    });
});