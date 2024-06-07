const burger = document.getElementById("hamburger")
      const mobileNav = document.getElementById("mobileNav")
      const mobileList = document.getElementById("mobileList")
      const mobileLogin = document.getElementById("mobileLogin")
      const cards = document.getElementsByClassName("what-we-give__cards")[0];
      const containers = document.getElementsByClassName("what-we-give__columns");
      const containerCount = containers.length;
      function toggleHamburger(){
        if(mobileNav.classList.contains("diactiveNav")){
          mobileNav.classList.remove("diactiveNav")
          mobileList.classList.remove("diactiveNav")
          mobileLogin.classList.remove("diactiveNav")
          mobileList.classList.add("mobileList")
          mobileNav.classList.add("mobileNav")
          mobileLogin.classList.add("mobileLogin")
        }else{
          mobileNav.classList.remove("mobileNav")
          mobileList.classList.remove("mobileList")
          mobileNav.classList.add("diactiveNav")
          mobileList.classList.add("diactiveNav")
          mobileLogin.classList.add("diactiveNav")
          mobileLogin.classList.remove("mobileLogin")
        }
      }

      function scrollFunc(isLeftScroll){
          const scrollDirection = isLeftScroll ? -1 : 1;
          for(let container of containers){
              let colPosClass = container.classList[1];
              const colPostNum = +colPosClass.charAt(colPosClass.length - 1);
              const newPos = colPostNum + scrollDirection;
              const newColPosClass = newPos < 1 ? `column_${containerCount}` : newPos > containerCount ? `column_${1}`:`column_${newPos}`;
              container.classList.remove(colPosClass);
              container.classList.add(newColPosClass);
          }
}