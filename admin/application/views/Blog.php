
            <!-- End Navbar -->
            <div class="content">
                <div class="container-fluid">
                    <div class="row">
                        <div class="col-md-12">
                            <div class="card">
                                <div class="card-header card-header-primary">
                                    <h4 class="card-title">Tambah Blog</h4>
                                    <p class="card-category">Complete Form</p>
                                </div>
                                <div class="card-body">
                                <form action="<?php echo base_url().'panel/simpan_post'?>" method="post" enctype="multipart/form-data">
                                        <div class="row">
                                            <div class="col-md-8">
                                                <div class="form-group">
                                                    <label class="bmd-label-floating">Judul</label>
                                                    <input type="text" name="judul" class="form-control" required>
                                                </div>
                                            </div>
                                            <div class="col-md-4">
                                                <div class="form-group">
                                                    <input type="date" name="tanggal" class="form-control" required>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="row">
                                            <div class="col-md-6">
                                                <div class="form-group">
                                                    <label class="">Gambar</label>
                                                </div>
                                            </div>
                                            <div class="col-md-6">
                                                <div class="form-group">
                                                <label class="">Meta</label>
                                                <textarea class="form-control" name="meta" rows="5" required></textarea>
                                                </div>
                                            </div>
                                        </div>
                                        <input type="file" name="filefoto" id="" required>
                                        <br><br>


                                        <div class="row">
                                            <div class="col-md-12">
                                                <div class="form-group">
                                                    <label>Deskripsi</label>
                                                    <div class="form-group">
                                                        <textarea class="form-control" id="editor1" name="deskripsi" rows="5" required></textarea>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <button type="submit" class="btn btn-primary pull-right">POST</button>

                                        <div class="clearfix"></div>
                                    </form>

                                    <input type="hidden"  value='<img width="250" height="631" src="<?php echo base_url().'assets/'; ?>images/news/ ___ " class="attachment-full size-full wp-post-image" alt="a" sizes="(max-width: 1100px) 100vw, 1100px" />' id="idInputField">
<button class="clsCopyBtn" onclick="copyFunction()">Layout Img</button>

<input type="hidden"  value='<div class="vc_empty_space" style="height: 15px"><span class="vc_empty_space_inner"></span></div>' id="idInputField2">
<button class="clsCopyBtn" onclick="copyFunctionn()">Space Custom</button>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>



            <script type="text/javascript">
            function copyFunction()
 {
      var trigger = $(this);
      $(".copy-action-btn").removeClass("text-success");
      var $tempElement = $("<input>");
      $("body").append($tempElement);
      var copyType = $("#idInputField").val();
      $tempElement.val(copyType).select();
      document.execCommand("Copy");
      $tempElement.remove();
      $(trigger).addClass("text-success");
  };

  function copyFunctionn()
 {
      var trigger = $(this);
      $(".copy-action-btn").removeClass("text-success");
      var $tempElement = $("<input>");
      $("body").append($tempElement);
      var copyType = $("#idInputField2").val();
      $tempElement.val(copyType).select();
      document.execCommand("Copy");
      $tempElement.remove();
      $(trigger).addClass("text-success");
  };
</script>