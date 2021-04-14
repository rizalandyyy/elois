<?php
	$b=$data->row_array();
?>
<a id='qodef-back-to-top' href='#'>
                <span class="qodef-icon-stack">
<span aria-hidden="true" class="qodef-icon-font-elegant arrow_carrot-up  "></span> </span>
            </a>
            <div class="qodef-content">
                <div class="qodef-content-inner">
                    <div class="qodef-title qodef-breadcrumb-type qodef-content-left-alignment qodef-animation-no" style="height:63px;" data-height="63">
                        <div class="qodef-title-image"></div>
                        <div class="qodef-title-holder" style="height:63px;">
                            <div class="qodef-container clearfix">
                                <div class="qodef-container-inner">
                                    <div class="qodef-title-subtitle-holder" style="">
                                        <div class="qodef-title-subtitle-holder-inner">
                                            <h1><span>Blog</span></h1>
                                            <div class="qodef-breadcrumbs-holder">
                                                <div class="qodef-breadcrumbs">
                                                    <div class="qodef-breadcrumbs-inner"><a href="<?php echo base_url('')?>">Elois</a><span class="qodef-delimiter">&nbsp;/&nbsp;</span><a href="<?php echo base_url('blog')?>">Blog</a> <span class="qodef-delimiter">&nbsp;/&nbsp;</span>
                                                        <span class="qodef-current"><?php echo $b['judul'];?></span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="qodef-container">
                        <div class="qodef-container-inner">
                            <div class="qodef-two-columns-75-25 clearfix">
                                <div class="qodef-column1 qodef-content-left-from-sidebar">
                                    <div class="qodef-column-inner">
                                        <div class="qodef-blog-holder qodef-blog-single">
                                            <article id="post-626" class="post-626 post type-post status-publish format-standard has-post-thumbnail hentry category-decoration tag-diy tag-engagement tag-organizing tag-venue tag-wedding">
                                                <div class="qodef-post-content">
                                                    <div class="qodef-post-image">
                                                        <img width="400" height="631" src="<?php echo base_url().'admin/assets/images/news/'.$b['gambar'];?>" class="attachment-full size-full wp-post-image" alt="a"
                                                            sizes="(max-width: 1100px) 100vw, 1100px" /> </div>
                                                    <div class="qodef-post-text">
                                                        <div class="qodef-post-text-inner clearfix">
                                                            <div class="qodef-post-info">
                                                                <div itemprop="dateCreated" class="qodef-post-info-date entry-date updated">
                                                                <?php $z = $b['tanggal'];
                                                                    $convertDate = date("d-m-Y", strtotime($z));
                                                                    print_r($convertDate);
                                                                ?>
                                                                    <meta itemprop="interactionCount" content="UserComments: 1" />
                                                                </div>
                                                                <div class="qodef-post-info-category">in <a href="" rel="category tag">Indonesia</a></div>
                                                            </div>
                                                            <h3 class="qodef-post-title">
                                                            <?php echo $b['judul'];?></h3>
                                                            <div class="vc_row wpb_row vc_row-fluid qodef-section qodef-content-aligment-left" style="">
                                                                <div class="clearfix qodef-full-section-inner">
                                                                    <div class="wpb_column vc_column_container vc_col-sm-12">
                                                                        <div class="vc_column-inner">
                                                                            <div class="wpb_wrapper">
                                                                                <div class="wpb_text_column wpb_content_element ">
                                                                                    <div class="wpb_wrapper">
                                                                                    <?php echo $b['isi'];?>

                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="qodef-post-info-bottom clearfix">

                                                    <div class="qodef-blog-share">
                                                        <div class="qodef-social-share-holder qodef-list">
                                                            <br>
                                                        </div>
                                                    </div>
                                                </div>
                                            </article>


                                        </div>
                                    </div>
                                </div>
                                <!--<div class="qodef-column2">-->
                                <!--    <div class="qodef-column-inner">-->
                                <!--        <aside class="qodef-sidebar">-->

                                <!--            <div class="widget widget_recent_entries">-->
                                <!--                <h4>Latest Posts</h4>-->
                                <!--                <ul>-->
                                <!--                    <li>-->
                                <!--                        <a href="">Mengenal apa itu Wedding Planner</a>-->
                                <!--                    </li>-->

                                <!--                </ul>-->
                                <!--            </div>-->

                                <!--        </aside>-->
                                <!--    </div>-->
                                <!--</div>-->
                            </div>
                        </div>
                    </div>
                </div>
            </div>