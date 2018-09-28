<template>
    <div class="article-wrap">
        <div class="article-item">
            <div class="article-msg clearfix">
                <div class="avatar fll clearfix">
                    <img src="../../static/img/timg .jpg" alt="">
                </div>
                <div class="article-msg-r flr clearfix">
                    <div class="author-msg">
                        <span class="author-name">
                            莫言
                        </span>
                        <span class="divide">
                            |
                        </span>
                        <span class="article-title">
                            丰乳肥臀
                        </span>
                    </div>
                    <div class="row2 clearfix">
                        <span class="strong">浏览：998</span>
                        <span class="strong">回复：2</span>
                        <span class="strong">分类：知性文章</span>
                    </div>
                </div> 
            </div>
            <div class="article-content clearfix">
                讲述母亲的书籍
            </div>
        </div>
        <div class="article-item">
            <div class="article-msg clearfix">
                <div class="avatar fll clearfix">
                    <img src="../../static/img/timg .jpg" alt="">
                </div>
                <div class="article-msg-r flr clearfix">
                    <div class="author-msg">
                        <span class="author-name">
                            莫言
                        </span>
                        <span class="divide">
                            |
                        </span>
                        <span class="article-title">
                            丰乳肥臀
                        </span>
                    </div>
                    <div class="row2 clearfix">
                        <span class="strong">浏览：998</span>
                        <span class="strong">回复：2</span>
                        <span class="strong">分类：知性文章</span>
                    </div>
                </div> 
            </div>
            <div class="article-content clearfix">
                讲述母亲的书籍
            </div>
        </div>
        <div class="article-item">
            <div class="article-msg clearfix">
                <div class="avatar fll clearfix">
                    <img src="../../static/img/timg .jpg" alt="">
                </div>
                <div class="article-msg-r flr clearfix">
                    <div class="author-msg">
                        <span class="author-name">
                            莫言
                        </span>
                        <span class="divide">
                            |
                        </span>
                        <span class="article-title">
                            丰乳肥臀
                        </span>
                    </div>
                    <div class="row2 clearfix">
                        <span class="strong">浏览：998</span>
                        <span class="strong">回复：2</span>
                        <span class="strong">分类：知性文章</span>
                    </div>
                </div> 
            </div>
            <div class="article-content clearfix">
                讲述母亲的书籍
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style scoped lang='scss'> 
    .article-wrap {
        margin-top: 30px;
        width: 750px;
        background: #fff;
        border-radius: 4px;
        overflow: hidden;
        padding: 20px;
        box-sizing: border-box;
    }

    .article-wrap .article-item {
        margin-bottom: 40px;

        .article-msg {
            .article-msg-r {
                margin-left: 10px;
                width: 630px; 
            }

            .avatar{
                width: 70px;
                height: 70px;

                img {
                    width: 100%;
                    height: 100%;
                    display: block;
                }
            }   

            .author-msg {
                line-height: 24px;
                height: 24px;
            }
        }   
    }
    .article-wrap .article-item .author-msg {
        .author-name {
            color: #409eff;
            font-weight: 700;
            padding-right: 8px;
            font-size: 18px;
        }

        .article-title {
            font-size: 18px;
            font-weight: 700;
            margin-left: 15px;
            color: #555;
        }
    }

    .article-wrap .article-item .article-msg {
 
        .row2 {
            margin-top: 15px;
            // margin-left: 10px;
            padding: 4px 8px;
            box-sizing: border-box;
            border-radius: 4px;
            // width: 100%;
            background: #bbb;
            color: #555;

            .strong {
                margin-right: 30px;
                font-size: 14px;
            }
        }
    }

    .article-wrap .article-item .article-content {
        margin-top: 8px;
    }
</style>