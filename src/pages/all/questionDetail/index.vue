<template>
    <div>
      <v-detail 
      :Title="QInfoDetail.question_title" 
      :QuestionUser="QInfoDetail.asker.user_name" 
      :QuestionContent="QInfoDetail.question_content" 
      :AnswerUser="QInfoDetail.answerer.user_name"
      :AnswerContent="QInfoDetail.answer_content"
      :ForPlace="QInfoDetail.charge_edt"
      :Cls="3"
      v-if="QInfoDetail">
      </v-detail>
    </div>
</template>

<script>
import {mapState,mapActions} from 'vuex'
import detail from '@/components/detail';
export default {
   onLoad(query) {
    this.clearQuestionDetail();
    const { id } = query;
    this.initPage(id);
  },
  created() {},
  components:{
    "v-detail":detail
  },
  data(){
    return {
      QInfoDetail:""
    }
  },
  computed: {
    ...mapState("detail", ["data"])
  },
  methods: {
    ...mapActions("detail", ["clearQuestionDetail", "getQuestionDetail"]),
    async initPage(id) {
      await this.getQuestionDetail(id);
      this.data.queDetail.answer_content=this.data.queDetail.answer_content.replace(/\<img/gi, '<img style="max-width:100%;height:auto"');
      this.QInfoDetail=this.data.queDetail;
    }
  }
}
</script>

