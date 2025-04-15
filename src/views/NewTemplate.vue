<template>
    <div
      class="smallBox"
      :style="{ left: x + 'px', top: y + 'px', position: 'absolute' }"
      @mousedown="startDrag"
    ></div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        x: 60,
        y: 60,
        isDragging: false,
        offsetX: 0,
        offsetY: 0
      }
    },
    methods: {
      startDrag(event) {
        this.isDragging = true
        this.offsetX = event.clientX - this.x
        this.offsetY = event.clientY - this.y
        window.addEventListener('mousemove', this.onDrag)
        window.addEventListener('mouseup', this.stopDrag)
      },
      onDrag(event) {
        if (!this.isDragging) return
        this.x = event.clientX - this.offsetX
        this.y = event.clientY - this.offsetY
      },
      stopDrag() {
        this.isDragging = false
        window.removeEventListener('mousemove', this.onDrag)
        window.removeEventListener('mouseup', this.stopDrag)
      }
    },
    beforeDestroy() {
      // Clean up just in case
      this.stopDrag()
    }
  }
  </script>
  
  <style scoped>
  .smallBox {
    width: 100px;
    height: 100px;
    background-color: lightseagreen;
    cursor: grab;
  }
  </style>