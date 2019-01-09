<template>
  <div>
    <div v-if="isProcessing" :class="{wrapper: isProcessing}">
      <div class="loader-loading">
        <span></span>
      </div>
    </div>
    <template v-else>
      <slot></slot>
    </template>

  </div>
</template>

<script>
  export default {
    name: "loader",
    props: {
      isProcessing: {
        type: Boolean,
        default: false
      }
    }
  }
</script>

<style scoped>
  .wrapper {
    display: flex;
    justify-content: center;
    margin-bottom: 14em;
  }

  .loader-loading {
    font-size: 20px;
    width: 8em;
    height: 8em;
    position: relative;
  }

  .loader-loading span {
    width: 3em;
    height: 3em;
    position: absolute;
    left: 50%;
    bottom: 0;
    transform: translate(-50%, 0) scale(1, 1);
    transform-origin: 50% 100%;
    animation: loader-loading-cnt-anim 1s 0s infinite ease-in;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .loader-loading span:after {
    content: '';
    width: 100%;
    height: 100%;
    border-radius: 0.3em;
    box-shadow: inset 0 0 0 0.4em #007bff;
    animation: loader-loading-anim 1s 0s infinite ease-in;
  }

  .loader-loading:after {
  / / shadow content: '';
    width: 5em;
    height: 0.3em;
    border-radius: 60%;
    background: radial-gradient(rgba(#ffaa56, 1) 40%, transparent 70%);
    position: absolute;
    left: 50%;
    bottom: 0;
    transform: translate(-50%, 50%);
    opacity: 0;
    animation: loader-loading-anim-shadow 1s 0s infinite ease-in-out;
  }

  @keyframes loader-loading-cnt-anim {
    40% {
      transform: translate(-50%, -100%) scale(1, 1);
    }
    65% {
      transform: translate(-50%, -130%) scale(1, 1);
    }
    80% {
      transform: translate(-50%, 0%) scale(1, 0.8);
    }
    90% {
      transform: translate(-50%, 0%) scale(1, 0.7);
    }
  }

  @keyframes loader-loading-anim {
    40% {
      transform: rotate(-135deg);
    }
    80% {
      transform: rotate(-270deg);
    }
    100% {
      transform: rotate(-270deg);
    }
  }

  @keyframes loader-loading-anim-shadow {
    40% {
      opacity: 0;
    }
    75% {
      opacity: 0;
    }
    80% {
      opacity: 0.8;
    }
  }


</style>
