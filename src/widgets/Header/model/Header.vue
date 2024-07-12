<template>
  <header class="header">
      <div class="header__container container">
        <div class="header__burger burger">бургер</div>
        <!-- ссылка -->
        <figure class="logo header__logo">
          <img
            class="logo__icon"
            src="@/shared/assets/img/icons/logo.svg"
            alt="3D4U logotype"
          />
          <span class="logo__caption"
            >Cтудия <br />3D-визуализации <br />3D FOR YOU</span
          >
        </figure>

        <nav class="header__nav nav">
          <ul class="nav__list">
            <li class="navbar__li nav__item">
              <select id="furniture" class="navbar__select" name="furniture">
                <option class="navbar__option" selected>Визуализация мебели</option>
                <option class="navbar__option">Подбор комплектующих мебели</option>
              </select>
            </li>
            <li class="navbar__categories">
              <a class="navbar__link" href="#">Верстка каталогов</a>
            </li>
            <li class="navbar__categories">
              <select id="projects" class="navbar__select" name="projects">
                <option class="navbar__option" selected>Дизайн проектов</option>
                <option class="navbar__option">Готовые проекты</option>
              </select>
            </li>
            <li class="navbar__categories">
              <a class="navbar__link" href="#">3D-тур</a>
            </li>
            <li class="navbar__categories">
              <a class="navbar__link" href="#">Онлайн-конструктор</a>
            </li>
            <li class="navbar__categories">
              <a class="navbar__link" href="#">О нас</a>
            </li>
            <li class="navbar__categories">
              <a class="navbar__link" href="#">Контакты</a>
            </li>
          </ul>
        </nav>

        <div class="header__external externa">arrow</div>
  </div>
  </header>
</template>
<script>

export default {};
</script>
<style lang="scss">
@import '@/shared/assets/styles/variables.scss'; 
.header {
  position: absolute;
  max-width: 1440px;
  width: 100%;
  font-weight: 400;
  font-size: 12px;
}

.nav {
  display: flex;
  justify-content: space-around;
  align-items: center;
  height: 78px;
}

.logo {
  display: flex;
  margin: 0;
  height: 46px;

  &__icon {
    margin: 0 10px 0 0;
  }

  &__icon_error {
  
  }

  &__caption {
    color: #fff;
  }
}

.nav__list {
  @extend %p4;
}

.navbar {
  display: flex;
  align-items: center;
  margin: 0;
  padding: 0;
  list-style-type: none;
  
  color: $white;

  &__categories:not(:last-child) {
    margin: 0 20px 0 0;
  }

  &__select {
    
    background-color: inherit;
    border: none;
    box-sizing: border-box;
    cursor: pointer;
  }

  &__option {
    background-color: black;
  }

  &__link {
    color: #fff;
    text-decoration: none;
  }
}
</style>
