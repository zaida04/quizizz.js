import {expect} from("chai");
import {QuizizzClient} from("../dist/index");
 
const TestQuizID = "5e837297add6c6001b35496e";

describe("Quizizz.js", async () => {
    const client = new QuizizzClient();
    describe("Fetch Quiz", async () => {
        const Quiz = await client.fetchQuiz(TestQuizID);
        console.log(Quiz);
        it("Valid ID", async () => {
            return expect(Quiz.id).to.be.equal(TestQuizID);
        });
    });
});
