import { Schema, model, models } from 'mongoose';

const PromptSchema = new Schema({
    creator : {
        type : Schema.Types.ObjectId,
        ref:'User'
    },
    promt: {
        type: String,
        required: [true, "Prompt is Reqyuireed"]
    },
    tag: {
        type: String,
        required: [true, "Ttag is Reqyuireed"]
    }
})

const Prompt = models.Prompt || model("Prompt", PromptSchema);

export default Prompt;