<a id='qodef-back-to-top' href='#'>
                <span class="qodef-icon-stack">
<span aria-hidden="true" class=" "><i class="fas fa-angle-up"></i></span> </span>
            </a>
            <div class="qodef-content">
                <div class="qodef-content-inner">
                    <div class="qodef-title qodef-breadcrumb-type qodef-content-left-alignment qodef-animation-no" style="height:63px;" data-height="63">
                        <div class="qodef-title-image"></div>
                        <div class="qodef-title-holder">
                            <div class="qodef-container clearfix">
                                <div class="qodef-container-inner">
                                    <div class="qodef-title-subtitle-holder" style="">
                                        <div class="qodef-title-subtitle-holder-inner">
                                            <h1><span>Blog</span></h1>
                                            <div class="qodef-breadcrumbs-holder">
                                                <div class="qodef-breadcrumbs">
                                                    <div class="qodef-breadcrumbs-inner"><a href="">Elois</a><span class="qodef-delimiter">&nbsp;/&nbsp;</span><span class="qodef-current">Blog</span></div>
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
                                        <div class="qodef-blog-holder qodef-blog-type-standard">

                                        <?php
			function limit_words($string, $word_limit){
                $words = explode(" ",$string);
                return implode(" ",array_splice($words,0,$word_limit));
            }
			foreach ($data->result() as $row) :
        ?>

                                        <article id="post-626" class="post-626 post type-post status-publish format-standard has-post-thumbnail hentry category-decoration tag-diy tag-engagement tag-organizing tag-venue tag-wedding">
                                                <div class="qodef-post-content">
                                                    <div class="qodef-post-image">
                                                        <a itemprop="url" href="<?php echo base_url().'artikel/'.$row->slug;?>" title="<?php echo $row->judul;?>">
                                                            <img width="400" height="631" src="<?php echo base_url().'admin/assets/images/news/'.$row->gambar;?>" class="attachment-full size-full wp-post-image" alt="a" sizes="(max-width: 1100px) 100vw, 1100px" />                                                            </a>
                                                    </div>
                                                    <div class="qodef-post-text">
                                                        <div class="qodef-post-text-inner">
                                                            <div class="qodef-post-info">
                                                                <div itemprop="dateCreated" class="qodef-post-info-date entry-date updated">
                                                                <?php $z = $row->tanggal;
                                                                    $convertDate = date("d-m-Y", strtotime($z));

                                                                    print_r($convertDate);
                                                                ?>
                                                                    <meta itemprop="interactionCount" content="UserComments: 0" />
                                                                </div>
                                                                <div class="qodef-post-info-category">in <a href="#" rel="category tag">Indonesia</a></div>
                                                            </div>
                                                            <h2 itemprop="headings" class="entry-title qodef-post-title">
                                                                <a itemprop="url" href="<?php echo base_url().'artikel/'.$row->slug;?>" title="<?php echo $row->judul;?>"><?php echo $row->judul;?></a>
                                                            </h2>
                                                            <p itemprop="description" class="qodef-post-excerpt"><?php echo limit_words($row->meta,75);?>
                                                            </p>
                                                        </div>
                                                    </div>
                                                    <div class="qodef-post-info-bottom clearfix">
                                                        <div class="qodef-post-read-more-button">
                                                            <a itemprop="url" href="<?php echo base_url().'artikel/'.$row->slug;?>" target="_self" class="qodef-btn qodef-btn-medium qodef-btn-transparent qodef-btn-custom-hover-color" data-hover-color="#f3ddce"> <span class="qodef-btn-text">Continue Reading</span> </a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </article>
                                            <?php endforeach;?>
                                        <!-- <article id="post-626" class="post-626 post type-post status-publish format-standard has-post-thumbnail hentry category-decoration tag-diy tag-engagement tag-organizing tag-venue tag-wedding">
                                                <div class="qodef-post-content">
                                                    <div class="qodef-post-image">
                                                        <a itemprop="url" href="<?php echo base_url('blog/blog6')?>" title="Tugas dan Joblist Seorang Wedding Organizer">
                                                            <img width="500" height="631" src="<?php echo base_url().'assets/'; ?>images/blg6.webp" class="attachment-full size-full wp-post-image" alt="a" sizes="(max-width: 1100px) 100vw, 1100px" />                                                            </a>
                                                    </div>
                                                    <div class="qodef-post-text">
                                                        <div class="qodef-post-text-inner">
                                                            <div class="qodef-post-info">
                                                                <div itemprop="dateCreated" class="qodef-post-info-date entry-date updated">
                                                                    11/12/2020
                                                                    <meta itemprop="interactionCount" content="UserComments: 0" />
                                                                </div>
                                                                <div class="qodef-post-info-category">in <a href="#" rel="category tag">Indonesia</a></div>
                                                            </div>
                                                            <h2 itemprop="headings" class="entry-title qodef-post-title">
                                                                <a itemprop="url" href="<?php echo base_url('blog/blog6')?>" title="Tugas dan Joblist Seorang Wedding Organizer ">Tugas dan Joblist Seorang Wedding Organizer </a>
                                                            </h2>
                                                            <p itemprop="description" class="qodef-post-excerpt">Pernikahan adalah salah satu hari paling berkesan bagi pasangan mana pun yang akan menikah. Pernikahan menjadi suatu momen indah dan bahagia bagi kedua pasangan. Dalam merencanakan pernikahan, Wedding Organizer menjadi elemen penting yang ada di dalamnya. Tugas Wedding Organizer adalah membuat jalannya acara bebas dari kekhawatiran apapun dan menciptakan momen tak terlupakan.
                                                            </p>
                                                        </div>
                                                    </div>
                                                    <div class="qodef-post-info-bottom clearfix">
                                                        <div class="qodef-post-read-more-button">
                                                            <a itemprop="url" href="<?php echo base_url('blog/blog6')?>" target="_self" class="qodef-btn qodef-btn-medium qodef-btn-transparent qodef-btn-custom-hover-color" data-hover-color="#f3ddce"> <span class="qodef-btn-text">Continue Reading</span> </a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </article>
                                        <article id="post-626" class="post-626 post type-post status-publish format-standard has-post-thumbnail hentry category-decoration tag-diy tag-engagement tag-organizing tag-venue tag-wedding">
                                                <div class="qodef-post-content">
                                                    <div class="qodef-post-image">
                                                        <a itemprop="url" href="<?php echo base_url('blog/blog5')?>" title="Alasan Mengapa Kalian Harus Memilih Wedding Organizer Terbaik">
                                                            <img width="500" height="631" src="<?php echo base_url().'assets/'; ?>images/b5a.webp" class="attachment-full size-full wp-post-image" alt="a" sizes="(max-width: 1100px) 100vw, 1100px" />                                                            </a>
                                                    </div>
                                                    <div class="qodef-post-text">
                                                        <div class="qodef-post-text-inner">
                                                            <div class="qodef-post-info">
                                                                <div itemprop="dateCreated" class="qodef-post-info-date entry-date updated">
                                                                    01/12/2020
                                                                    <meta itemprop="interactionCount" content="UserComments: 0" />
                                                                </div>
                                                                <div class="qodef-post-info-category">in <a href="#" rel="category tag">Indonesia</a></div>
                                                            </div>
                                                            <h2 itemprop="headings" class="entry-title qodef-post-title">
                                                                <a itemprop="url" href="<?php echo base_url('blog/blog5')?>" title="Alasan Mengapa Kalian Harus Memilih Wedding Organizer Terbaik ">Cara memilih Wedding Organizer yang tepat untuk Pernikahanmu </a>
                                                            </h2>
                                                            <p itemprop="description" class="qodef-post-excerpt">Kunci sukses sebuah acara pernikahan adalah selain merencanakan konsep dengan sebaik-baiknya, juga memastikan eksekutor atau pelaksana acara di hari H menjalankan semua konsep sesuai dengan apa yang telah direncanakan. Kedua pasangan tentunya memimpikan acara pernikahan terbaik dan terindah untuk pernikahan mereka. Menciptakan momen manis untuk dikenang selama-lamanya. Namun, bagaimana apabila pasangan kesulitan dalam melakukannya? Bingung mulai dari mana, atau bahkan tidak tau apa yang harus dilakukan? Bekerja sama dengan profesional menjadi salah satu jalan keluarnya.
                                                            </p>
                                                        </div>
                                                    </div>
                                                    <div class="qodef-post-info-bottom clearfix">
                                                        <div class="qodef-post-read-more-button">
                                                            <a itemprop="url" href="<?php echo base_url('blog/blog5')?>" target="_self" class="qodef-btn qodef-btn-medium qodef-btn-transparent qodef-btn-custom-hover-color" data-hover-color="#f3ddce"> <span class="qodef-btn-text">Continue Reading</span> </a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </article>
                                            <article id="post-626" class="post-626 post type-post status-publish format-standard has-post-thumbnail hentry category-decoration tag-diy tag-engagement tag-organizing tag-venue tag-wedding">
                                                <div class="qodef-post-content">
                                                    <div class="qodef-post-image">
                                                        <a itemprop="url" href="<?php echo base_url('blog/blog4')?>" title="Alasan Mengapa Kalian Harus Memilih Wedding Organizer Terbaik">
                                                            <img width="500" height="631" src="<?php echo base_url().'assets/'; ?>images/bl8.webp" class="attachment-full size-full wp-post-image" alt="a" sizes="(max-width: 1100px) 100vw, 1100px" />                                                            </a>
                                                    </div>
                                                    <div class="qodef-post-text">
                                                        <div class="qodef-post-text-inner">
                                                            <div class="qodef-post-info">
                                                                <div itemprop="dateCreated" class="qodef-post-info-date entry-date updated">
                                                                    26/11/2020
                                                                    <meta itemprop="interactionCount" content="UserComments: 0" />
                                                                </div>
                                                                <div class="qodef-post-info-category">in <a href="#" rel="category tag">Indonesia</a></div>
                                                            </div>
                                                            <h2 itemprop="headings" class="entry-title qodef-post-title">
                                                                <a itemprop="url" href="<?php echo base_url('blog/blog4')?>" title="Alasan Mengapa Kalian Harus Memilih Wedding Organizer Terbaik ">Alasan Mengapa Kalian Harus Memilih Wedding Organizer Terbaik </a>
                                                            </h2>
                                                            <p itemprop="description" class="qodef-post-excerpt">Menikah adalah pengalaman luar biasa dalam kehidupan siapa pun, terlepas dari suku, ras, atau agama yang dianut oleh pasangan. Menikah akan menjadi hari yang paling penting bagi pasangan tersebut, dan itulah sebabnya acara pernikahan biasanya diselenggerakan dengan meriah dan juga sakral.
                                                            </p>
                                                        </div>
                                                    </div>
                                                    <div class="qodef-post-info-bottom clearfix">
                                                        <div class="qodef-post-read-more-button">
                                                            <a itemprop="url" href="<?php echo base_url('blog/blog4')?>" target="_self" class="qodef-btn qodef-btn-medium qodef-btn-transparent qodef-btn-custom-hover-color" data-hover-color="#f3ddce"> <span class="qodef-btn-text">Continue Reading</span> </a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </article>
                                            <article id="post-626" class="post-626 post type-post status-publish format-standard has-post-thumbnail hentry category-decoration tag-diy tag-engagement tag-organizing tag-venue tag-wedding">
                                                <div class="qodef-post-content">
                                                    <div class="qodef-post-image">
                                                        <a itemprop="url" href="<?php echo base_url('blog/blog3')?>" title="5 Skill utama yang harus dimiliki oleh Wedding Planner">
                                                            <img width="500" height="631" src="<?php echo base_url().'assets/'; ?>images/sk1.webp" class="attachment-full size-full wp-post-image" alt="a" sizes="(max-width: 1100px) 100vw, 1100px" />                                                            </a>
                                                    </div>
                                                    <div class="qodef-post-text">
                                                        <div class="qodef-post-text-inner">
                                                            <div class="qodef-post-info">
                                                                <div itemprop="dateCreated" class="qodef-post-info-date entry-date updated">
                                                                    23/11/2020
                                                                    <meta itemprop="interactionCount" content="UserComments: 0" />
                                                                </div>
                                                                <div class="qodef-post-info-category">in <a href="#" rel="category tag">Indonesia</a></div>
                                                            </div>
                                                            <h2 itemprop="headings" class="entry-title qodef-post-title">
                                                                <a itemprop="url" href="<?php echo base_url('blog/blog3')?>" title="5 Skill utama yang harus dimiliki oleh Wedding Planner ">5 Skill utama yang harus dimiliki oleh Wedding Planner </a>
                                                            </h2>
                                                            <p itemprop="description" class="qodef-post-excerpt">Seorang Wedding Planner, harus memiliki orientasi pada detail dan terbiasa dalam mengorganisir banyak hal. Memiliki semangat nyata dan totalitas untuk membantu serta mewujudkan harapan klien sebaik mungkin. Keterampilan komunikasi yang baik, kemampuan untuk tetap tenang dan dapat menenangkan klien apabila menemukan kendala, sangat penting untuk dimiliki oleh Wedding Planner.
                                                            </p>
                                                        </div>
                                                    </div>
                                                    <div class="qodef-post-info-bottom clearfix">
                                                        <div class="qodef-post-read-more-button">
                                                            <a itemprop="url" href="<?php echo base_url('blog/blog3')?>" target="_self" class="qodef-btn qodef-btn-medium qodef-btn-transparent qodef-btn-custom-hover-color" data-hover-color="#f3ddce"> <span class="qodef-btn-text">Continue Reading</span> </a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </article>
                                            <article id="post-626" class="post-626 post type-post status-publish format-standard has-post-thumbnail hentry category-decoration tag-diy tag-engagement tag-organizing tag-venue tag-wedding">
                                                <div class="qodef-post-content">
                                                    <div class="qodef-post-image">
                                                        <a itemprop="url" href="<?php echo base_url('blog/blog2')?>" title="Fungsi Utama Wedding Planner pada Pernikahan">
                                                            <img width="500" height="631" src="<?php echo base_url().'assets/'; ?>images/bg3.webp" class="attachment-full size-full wp-post-image" alt="a" sizes="(max-width: 1100px) 100vw, 1100px" />                                                            </a>
                                                    </div>
                                                    <div class="qodef-post-text">
                                                        <div class="qodef-post-text-inner">
                                                            <div class="qodef-post-info">
                                                                <div itemprop="dateCreated" class="qodef-post-info-date entry-date updated">
                                                                    20/11/2020
                                                                    <meta itemprop="interactionCount" content="UserComments: 0" />
                                                                </div>
                                                                <div class="qodef-post-info-category">in <a href="#" rel="category tag">Indonesia</a></div>
                                                            </div>
                                                            <h2 itemprop="headings" class="entry-title qodef-post-title">
                                                                <a itemprop="url" href="<?php echo base_url('blog/blog2')?>" title="Fungsi Utama Wedding Planner pada Pernikahan">Fungsi Utama Wedding Planner pada Pernikahan</a>
                                                            </h2>
                                                            <p itemprop="description" class="qodef-post-excerpt">Jika sebelumnya kita telah mengenal apa itu Wedding Planner, maka kali ini kita akan sama-sama lihat, apa sih sebenarnya fungsi utama dari Wedding Planner dalam sebuah acara pernikahan? Mengapa calon pengantin perlu mempertimbangkan untuk menggunakan jasa seorang Wedding Planner di pernikahannya?
                                                            </p>
                                                        </div>
                                                    </div>
                                                    <div class="qodef-post-info-bottom clearfix">
                                                        <div class="qodef-post-read-more-button">
                                                            <a itemprop="url" href="<?php echo base_url('blog/blog2')?>" target="_self" class="qodef-btn qodef-btn-medium qodef-btn-transparent qodef-btn-custom-hover-color" data-hover-color="#f3ddce"> <span class="qodef-btn-text">Continue Reading</span> </a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </article>
                                            <article id="post-626" class="post-626 post type-post status-publish format-standard has-post-thumbnail hentry category-decoration tag-diy tag-engagement tag-organizing tag-venue tag-wedding">
                                                <div class="qodef-post-content">
                                                    <div class="qodef-post-image">
                                                        <a itemprop="url" href="<?php echo base_url('blog/blog1')?>" title="Mengenal Apa Itu Wedding Planner">
                                                            <img width="200" height="631" src="<?php echo base_url().'assets/'; ?>images/blog1.webp" class="attachment-full size-full wp-post-image" alt="a" sizes="(max-width: 1100px) 100vw, 1100px" />                                                            </a>
                                                    </div>
                                                    <div class="qodef-post-text">
                                                        <div class="qodef-post-text-inner">
                                                            <div class="qodef-post-info">
                                                                <div itemprop="dateCreated" class="qodef-post-info-date entry-date updated">
                                                                    17/11/2020
                                                                    <meta itemprop="interactionCount" content="UserComments: 0" />
                                                                </div>
                                                                <div class="qodef-post-info-category">in <a href="#" rel="category tag">Indonesia</a></div>
                                                            </div>
                                                            <h2 itemprop="headings" class="entry-title qodef-post-title">
                                                                <a itemprop="url" href="<?php echo base_url('blog/blog1')?>" title="Mengenal Apa Itu Wedding Planner">Mengenal Apa Itu Wedding Planner</a>
                                                            </h2>
                                                            <p itemprop="description" class="qodef-post-excerpt">Pernikahan tentunya menjadi momen sakral dan bahagia bagi setiap pasangan pengantin. Di  momen inilah, dua insan  berpadu kasih dan saling berjanji untuk menghabiskan waktu bersama hingga maut memisahkan. Tentu, pernikahan akan menjadi memorable atau tidak terlupakan apabila diselenggerakan dengan sebaik dan seindah mungkin, tanpa melewatkan momen-momen berharga di tiap prosesnya, yang pastinya tak akan terulang kembali.  Dalam masa mempersiapkan momen yang sangat special dan sekali seumur hidup ini, peran seorang Wedding Planner menjadi sangat krusial dan penting, untuk mewujudkan pernikahan idaman dan menikmati setiap detail prosesnya. Tapi, tunggu dulu. Memangnya, siapa sih Wedding Planner ini?
                                                            </p>
                                                        </div>
                                                    </div>
                                                    <div class="qodef-post-info-bottom clearfix">
                                                        <div class="qodef-post-read-more-button">
                                                            <a itemprop="url" href="<?php echo base_url('blog/blog1')?>" target="_self" class="qodef-btn qodef-btn-medium qodef-btn-transparent qodef-btn-custom-hover-color" data-hover-color="#f3ddce"> <span class="qodef-btn-text">Continue Reading</span> </a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </article> -->

                                            <div class="qodef-pagination">
                                               <ul class="clearfix">
                                                   <!-- <li class='qodef-pagination-prev'>
                                                       <a itemprop='url' href=''></a>
                                                   </li>
                                                   <li>
                                                       <ul class='qodef-pagination-numbers clearfix'>
                                                           <li class='qodef-pagination-page active'><span>1</span></li>
                                                           <li class='qodef-pagination-page'><a itemprop='url' href='' class='inactive'>2</a></li>
                                                           <li class='qodef-pagination-page'><a itemprop='url' href='' class='inactive'>3</a></li>
                                                       </ul>
                                                   </li>
                                                   <li class="qodef-pagination-next"><a itemprop="url" href=""><span class="arrow_carrot-right"></span></a></li> -->
                                                   <?php echo $pagination; ?>
                                               </ul>
                                            </div>

                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>