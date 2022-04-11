<template>
  <header>
    <nav ref="nav">
      <div class="nav-closed">
        <h3>Portfolio</h3>
        <ul class="nav-links">
          <li
              class="nav-button"
              v-for="(button, index) in navigationButtons"
              :key="index"
              @click="simpleAnimation(index, button)"
              ref="navButton">
            {{ button.name }}
          </li>
        </ul>
      </div>
      <div class="nav-open" ref="navOpen">
        <component v-bind:is="currentMenu"></component>
      </div>
    </nav>
  </header>
  <img class="cover" src="/images/long-cover.jpg" alt="cover" ref="cover" />
  <h1 class="cover-date">{{ new Date().toLocaleDateString() }}</h1>
</template>

<script>
import { defineComponent, watchEffect } from 'vue'
import { gsap } from "gsap";
import {toggleMenuItem, toggleNavigation} from "@/helpers";

const timeline = gsap.timeline({ paused: true, reversed: true })
const timeline2 = gsap.timeline({ paused: true })

const navigationButtons = [
  {
    name: 'Shop'
  },
  {
    name: 'Blog'
  },
  {
    name: 'Contact'
  },
];

function toggleTween(tween) {
  tween.reversed() ? tween.play() : tween.reverse();
}

export default defineComponent({
  name: 'HomeComponent',
  props: {},
  mounted() {
    toggleNavigation(timeline, this.$refs);
  },
  data() {
    return {
      navigationButtons,
      activeMenu: '',
      isMenuOpen: false,
      currentMenu: null,
    }
  },
  methods: {
    simpleAnimation(event, menuItem) {
      if (timeline.isActive()) {
        event.preventDefault();
        event.stopImmediatePropagation();

        return false;
      }

      watchEffect(() => {
        setTimeout(() => {
          import(`./${menuItem.name}.vue`).then((value) => {
            this.currentMenu = value.default;
          })
        }, 500);
      });

      if (this.isMenuOpen && this.activeMenu !== menuItem.name) {
        timeline2.play();
        toggleMenuItem(timeline2, this.$refs);
        this.activeMenu = menuItem.name;
      } else {
        this.activeMenu = this.activeMenu === '' ? menuItem.name : '';
        this.isMenuOpen = !this.isMenuOpen;
        toggleTween(timeline);
      }
    }
  }
})
</script>

<style scoped>
  header {
    height: 100vh;
    position: relative;
    display: flex;
    width: 750px;
  }
  .cover {
    position: absolute;
    height: 100%;
    width: 100%;
    top: 0;
    right: 0;
    object-fit: cover;
    object-position: top;
  }
  .cover-date {
    position: absolute;
    color: #fff;
    left: 10%;
    bottom: 10%;
    opacity: 0.7;
    font-size: 32pt;
  }

  nav {
    background: #fff;
    z-index: 2;
    width: 100%;
    height: 100px;
    min-height: 100px;
    color: #916356;
  }

  .nav-closed {
    display: flex;
    justify-content: space-around;
    align-items: center;
    width: 100%;
    height: 100%;
    max-height: 100px;
    min-height: 100px;
    /*height: 20%;*/
    /*width: 40%;*/
    /*position: absolute;*/
  }

  .nav-closed ul {
    display: flex;
    width: 50%;
    justify-content: space-around;
    list-style: none;
  }

  .nav-open {
    position: absolute;
    width: 100%;
    height: 80%;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    opacity: 0;
    pointer-events: none;
  }

  .nav-button {
    cursor: pointer;
  }
</style>
