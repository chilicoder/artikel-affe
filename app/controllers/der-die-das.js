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
    lastAnswers: computed(function() {
        return [];
    }),
    currentIndex: 0,
    currentWord: computed('currentIndex', function(){
        return this.model[this.currentIndex].word;
    }),
    statistics: computed('lastAnswers.[]', function(){
        const lastAnswers = this.lastAnswers;
        if (lastAnswers.length === 0) return {};

        let rollingStreak = 0;
        let longestStreak = 0;
        for (let i=0;i<lastAnswers.length;i++) {
            rollingStreak = lastAnswers[i].result ? rollingStreak + 1 : 0;
            longestStreak = Math.max(rollingStreak, longestStreak);
        }

        const last10 = lastAnswers.slice(0,10);        
        const last10right = last10.filter(i=>i.result);

        const last100 = lastAnswers.slice(0,100);
        const last100right = last100.filter(i=>i.result);
        const last100der = last100.filter(i=>i.article === 'Der')
        const last100die = last100.filter(i=>i.article === 'Die')
        const last100das = last100.filter(i=>i.article === 'Das')
        const last100derRight = last100der.filter(i=>i.result);
        const last100dieRight = last100die.filter(i=>i.result);
        const last100dasRight = last100das.filter(i=>i.result);
        let statistics = {
            streak: {
                all: lastAnswers.length,
                right: last10right.length,
                total: last10.length,
                longestStreak: longestStreak
            },
            percents: {
                total: new Intl.NumberFormat('en-EN', { style: 'percent' }).format(last100right.length/Math.max(last100.length,1)) ,
                der: new Intl.NumberFormat('en-EN', { style: 'percent' }).format(last100derRight.length/Math.max(last100der.length,1)) ,
                die: new Intl.NumberFormat('en-EN', { style: 'percent' }).format(last100dieRight.length/Math.max(last100die.length,1)) ,
                das: new Intl.NumberFormat('en-EN', { style: 'percent' }).format(last100dasRight.length/Math.max(last100das.length,1)) ,

            }
        };
        return statistics;

    }),
    checkArticle: function(a){
        const rightAnswer = this.model[this.currentIndex];

        this.lastAnswers.unshiftObject({
            result: rightAnswer.article === a,
            answer: a,
            article: rightAnswer.article,
            word: rightAnswer.word,
            translation: rightAnswer.translation
        })

        this.setNextIndex();
    }
});
