<script setup lang="ts">
import VueWriter from "vue-writer";
import { useStore } from '@/store/index';
const mainStore = useStore();

const messageItems = ref<Array<any>>([
  {
    from: 'bot',
    content: 'ユースはコンテンツ組み合わせで転載さ文なでため、引用しれ人格と転載号厳格の侵害主題が生じるれてはさです、言語のペディアも、',
    is_latest: false,
  },
  {
    from: 'user',
    content: '公表し文章を引用することにおいて利用独自ないますているたです。しかし、方針の違反物は、',
    is_latest: false,
  },
  {
    from: 'bot',
    content: '有償の既存示し引用独自ん台詞を合意する、このBYができて記事が演説ありことを保護するれない。',
    is_latest: false,
  },
  {
    from: 'user',
    content: 'たとえばを、投稿条が引用行われている百科をそのままするありことも、説明ですます、',
    is_latest: false,
  },
]);
const botMessage = {
  from: 'bot',
  content: '場合としては引用書きの投稿として文献上の問題もできことが、',
  is_latest: true,
};

const inputText = ref<string>('');
interface Props {
  label?: string;
}

const props = withDefaults(defineProps<Props>(), {
    label: 'default',
})

//const emit = defineEmits(['toggleWindow']);

const toggleWindow = () => {
  mainStore.toggleWindow();
};

const onSubmitMessage = async () => {
  console.log('onSubmitMessage');
  const userMessage = {
    from: 'user',
    content: inputText.value,
  };
  messageItems.value.push(userMessage);
  await new Promise(resolve => setTimeout(resolve, 100));
  scrollToBottom();
  await new Promise(resolve => setTimeout(resolve, 3000));
  messageItems.value.push(botMessage);
  await new Promise(resolve => setTimeout(resolve, 100));
  scrollToBottom();
};

const windowInnerBody = ref();
const scrollToBottom = () => {
  const ele = windowInnerBody.value;
  console.log(ele.scrollHeight);
  console.log(ele.scrollTop);

  ele.scrollTop = ele.scrollHeight;
};
</script>

<template>
  <div class="window">
    <header class="window__header">
      <img src="@/assets/images/logo.svg" width="130" />
    </header>
    <div class="window__inner">
      <div class="window__inner_body" ref="windowInnerBody">
        <div
          v-for="message, index in messageItems"
          :key="index"
          :class="['messageBox', { user: message.from === 'user' }]"
        >
          <div class="messageBox__inner">
            <VueWriter
              v-if="message.is_latest"
              :array="[message.content]"
              :iterations="1"
              :typeSpeed="70"
            />
            <template
              v-else
            >
              {{ message.content }}
            </template>
          </div>
        </div>
      </div>
    </div>
    <footer class="window__footer">
      <textarea
        v-model="inputText"
        placeholder="ご質問などありましたらお声掛けください。"
        class="inputArea"
      >
      </textarea>
      <button
        @click="onSubmitMessage"
        class="btn"
      >
        送信
      </button>
      <!-- <span
        @click="onSubmitMessage"
        class="inputArea__sendBtn"
      >
        <img src="@/assets/images/icon__submit.svg" width="20" />
        </span> -->
    </footer>
    <div
      @click="toggleWindow"
      class="window__closeBtn"
    >
      ✕
    </div>
  </div>
</template>

<style lang="scss">
.window {
  width: 340px;
  height: 600px;
  border-radius: 24px;
  background-color: #fff;
  box-shadow: 1px 1px 10px rgba(0, 0, 0, .15);
  position: relative;

  &__header {
    padding: 15px 15px;
    border-bottom: 1px solid #efefef;

    img {
      vertical-align: middle;
    }
  }
  &__inner {
    &_body {
      width: 100%;
      height: calc(600px - 180px);
      padding: 24px;
      box-sizing: border-box;
      overflow-y: scroll;
      scroll-behavior: smooth;
    }
  }
  &__footer {
    width: 100%;
    box-sizing: border-box;
    padding: 12px 15px;
    background-color: #fafafa;
    border-top: 1px solid #eee;
    border-radius: 0 0 24px 24px;
    position: absolute;
    bottom: 0;
    right: 0;
    text-align: right;
  }
  &__closeBtn {
    position: absolute;
    top: 12px;
    right: 18px;
    font-size: 20px;
    color: #c8c8c8;

    &:hover {
      cursor: pointer;
    }
  }
}
.messageBox {
  &__inner {
    display: inline-block;
    width: 90%;
    box-sizing: border-box;
    padding: 12px 15px;
    border-radius: 10px;
    border: 1px solid #eee;
    background-color: #fafafa;
    margin-bottom: 20px;
    color: #333;
    font-size: 14px;
    letter-spacing: 0.05rem;
  }
  &.user {
    text-align: right;

    .messageBox__inner {
      background-color: #f1f6ff;
      border: 1px solid #dde3ec;
      text-align: left;
    }
  }
}
::placeholder {
  color: #bfbfbf;
}
.inputArea {
  height: 20px;
  background-color: #fafafa;
  border: none;
  color: #333;
  font-size: 14px;
  letter-spacing: 0.05rem;
  width: 100%;
  box-sizing: border-box;
  resize: none;
  transition: height .05s ease-out;

  &:focus {
    height: 70px;
    outline: none;
    transition: height .1s ease-out;
  }
}
// .sendBtn {
//   position: absolute;
//   bottom: 4px;
//   right: 10px;
//   opacity: .5;
//   transition: opacity .2s;

//   &:hover {
//     cursor: pointer;
//     transition: opacity .2s;
//     opacity: .2;
//   }
// }
.btn {
  display: inline-block;
  padding: 8px 22px;
  border-radius: 10px;
  background-color: #008ce7;
  border: none;
  color: #fff;

  &:hover {
    cursor: pointer;
  }
}
</style>
