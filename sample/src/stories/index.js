import { storiesOf } from "@storybook/vue"
import MyButton from "../components/MyButton.vue"

storiesOf('MyButton', module)
    .add('sample', () => ({
        components: { MyButton },
        template: `<MyButton>sample</MyButton>`
    }))
