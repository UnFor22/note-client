<template>
    <div class="note-wrap w1170">
        <div class="title-wrap mt6">
            <div class="title">标题</div>
            <el-input v-model="formData.title" placeholder="请输入标题"></el-input>
        </div>
        <div class="title-wrap mt6">
            <div class="title">内容</div>
            <quill-editor
            v-model="formData.content"
            ref="myQuillEditor"
            :options="editorOption" class="editor"
            >
            </quill-editor>
        </div>
        <div class="note-fenlei">
            分类：暂时没有
        </div>
        <div class="note-button">
            <el-button type="primary">发布笔记</el-button>
        </div>
    </div>
</template>

<script>
    import 'quill/dist/quill.core.css'
    import 'quill/dist/quill.snow.css'
    import 'quill/dist/quill.bubble.css'
    import {quillEditor, Quill} from 'vue-quill-editor'
    import {container, ImageExtend, QuillWatch} from 'quill-image-extend-module'

    Quill.register('modules/ImageExtend', ImageExtend)
    export default {
        data () {
            return {
                formData:{
                    title: '',
                    content: '',
                },
                // 富文本框参数设置
                editorOption: {  
                    modules: {
                        ImageExtend: {
                            loading: true,
                            name: 'img',
                            // action: updateUrl,
                            response: (res) => {
                                return res.info
                            }
                        },
                        toolbar: {
                            container: container,
                            // handlers: {
                            //     'image': function () {
                            //     QuillWatch.emit(this.quill.id)
                            //     }
                            // }
                        }
                    }
                }
            }
        },
        components: {
            quillEditor
        },
    }
</script>

<style scoped lang='scss'>
    .note-wrap {
        background: #fff;
        margin: 30px auto;
        padding: 8px 24px 30px;
        box-sizing: border-box;
        border-radius: 6px;

        .mt6 {
            margin-top: 6px;
        }

        .title-wrap {
            .title {
                color: #333;
                font-size: 20px;
                font-weight: 700;
                line-height: 1.5;
                margin-bottom: 6px;
            }
            
        }

        .note-fenlei {
            margin: 10px 0;
            color: #409eff;

        }
    }
    /deep/ .ql-blank {
        height: 300px;
    } 
</style>