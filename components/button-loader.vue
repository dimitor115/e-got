<template>

  <b-button :variant="variant"
            :size="size"
            @click="emitClick">
    <section v-if="isProcessing" class="demo7">

      <div class="demo7-loading">
        <span></span>
      </div>

    </section>
    <slot v-else></slot>
  </b-button>

</template>

<script>
  export default {
    name: "button-loader",
    props: {
      isProcessing: false,
      variant: {
        type: String,
        default: 'primary'
      },
      size: {
        type: String,
        default: 'lg'
      }
    },
    methods: {
      emitClick() {
        this.$emit('click')
      }
    }
  }
</script>

<style scoped>
  .demo7 {
    background: #ffffff;
    display: flex;
    justify-content: center;
  }

  .demo7-loading {
    font-size: 9px;
    width: 3em;
    height: 3em;
    border: 0.2em solid rgba(0, 123, 255, 1);
    border-radius: 50%;
    position: relative;
  }

  .demo7-loading span:after {
  / / dzwonek content: '';
    width: 1em;
    height: 0.4em;
    border-radius: 0.2em 0.2em 0 0;
    top: 0%;
    position: absolute;
    left: 50%;
    top: 0;
    background: #007bff;
    transform: translate(-50%, -120%);
  }

  .demo7-loading:before,
  .demo7-loading:after {
    content: '';
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, calc(-100% + 0.16em)) rotate(0deg);
    height: 1.3em;
    width: 0.32em;
    border-radius: 0.15em;
    background: rgba(0, 123, 255, 1);
    transform-origin: 50% calc(100% - 0.16em);
    animation: demo7-loading-anim 2s 0s infinite linear;
    /*box-shadow: 0 0 0.3em rgba(0, 123, 255, 1);*/
  }

  .demo7-loading:after {
    height: 0.9em;
    border-radius: 1em;
    animation: demo7-loading-anim 5s 0s infinite linear;
  }

  @keyframes demo7-loading-anim {
    100% {
      transform: translate(-50%, calc(-100% + 0.16em)) rotate(360deg);
    }
  }
</style>
