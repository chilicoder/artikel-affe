import Controller from '@ember/controller';
import { computed } from '@ember/object';

export default Controller.extend({
    setNextIndex(){
        const newIndex = Math.floor(Math.random() * this.model.length);
        this.set('currentIndex',newIndex);
    },
    articles: computed(function() {
        return ['Der','Die','Das'];
    }),
    lastAnswers: [],
    currentIndex: 0,
    currentWord: computed('currentIndex', function(){
        return this.model[this.currentIndex].word;
    }),
    checkArticle: function(a,b){
        const rightAnswer = this.model[this.currentIndex];

        this.lastAnswers.unshiftObject({
            result: rightAnswer.article === a,
            answer: a,
            article: rightAnswer.article,
            word: rightAnswer.word
        })

        this.setNextIndex();
    }
});
