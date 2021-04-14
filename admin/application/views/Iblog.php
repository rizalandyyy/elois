
            <!-- End Navbar -->
            <div class="content">
                <div class="container-fluid">
                    <div class="row">
                        <div class="col-md-12">
                            <div class="card">
                                <div class="card-header card-header-primary">
                                    <h4 class="card-title">Blog Image</h4>
                                    <p class="card-category">Complete Form</p>
                                </div>
                                <div class="card-body">
                                <form action="<?php echo base_url().'panel/uploadgam'?>" method="post" enctype="multipart/form-data">
                                        <div class="row">
                                            <div class="col-md-6">
                                                <div class="form-group">
                                                    <label class="">Gambar</label>
                                                </div>
                                            </div>
                                        </div>
                                        <input type="file" name="filefoto" id="" required>
                                        <br><br>

                                        <div class="row">
                                            <div class="col-md-8">
                                                <div class="form-group">
                                                    <label class="bmd-label-floating">Nama Gambar</label>
                                                    <input type="text" name="namagam" class="form-control" required>
                                                </div>
                                            </div>
                                        </div>

                                        <button type="submit" class="btn btn-primary pull-right">POST</button>
                                        <div class="clearfix"></div>
                                    </form>

                                </div>
                            </div>

                            <div class="card">
                                <div class="card-header card-header-warning">
                                    <h4 class="card-title">Data Gambar </h4>
                                    <p class="card-category"></p>
                                </div>
                                <div class="card-body table-responsive">
                                    <table class="table table-hover">
                                        <thead class="text-warning">
                                            <th>No</th>
                                            <th>Gambar</th>
                                            <th>Nama</th>
                                        </thead>
                                        <tbody>
                                        <?php $x=1 ?>
                                            <?php foreach ($data->result() as $row) :?>
                                            <tr>

                                                <td><?php echo $x?></td>
                                                <td><?php echo $row->gambar?></td>
                                                <td><?php echo $row->nama?></td>
                                                <?php $x++?>
                                                </form>
                                            </tr>
                                            <?php   endforeach; ?>
                                        </tbody>
                                    </table>
                                    <div class="row">
                                        <div class="col">
                                            <!--Tampilkan pagination-->                                            <?php echo $pagination; ?>

                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
