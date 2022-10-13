import { reactive, onMounted, onBeforeUnmount } from "vue";
//自定义hook函数方法
export default function savePoint() {
  let point = reactive({
    x: 0,
    y: 0,
  });
  const savePoint = (event: any) => {
    point.x = event.pageX;
    point.y = event.pageY;
    console.log(event.pageX, event.pageY);
  };
  onMounted(() => {
    window.addEventListener("click", savePoint);
  });
  onBeforeUnmount(() => {
    window.removeEventListener("click", savePoint);
  });
  return point;
}
