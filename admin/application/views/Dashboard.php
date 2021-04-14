
            <!-- End Navbar -->
            <div class="content">
                <div class="container-fluid">
                    <div class="row">
                        <div class="col-lg-3 col-md-6 col-sm-6">
                            <div class="card card-stats">
                                <div class="card-header card-header-warning card-header-icon">
                                    <div class="card-icon">
                                        <i class="material-icons">content_copy</i>
                                    </div>
                                    <p class="card-category">Hot Klien</p>
                                    <h3 class="card-title">
                                        <?php echo $count?>
                                    </h3>
                                </div>
                                <div class="card-footer">
                                    <div class="stats">
                                        <i class="material-icons">date_range</i> All time
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-3 col-md-6 col-sm-6">
                            <div class="card card-stats">
                                <div class="card-header card-header-primary card-header-icon">
                                    <div class="card-icon">
                                        <i class="material-icons">store</i>
                                    </div>
                                    <p class="card-category">Klien Sudah Dihubungi</p>
                                    <h3 class="card-title"><?php echo $countc?></h3>
                                </div>
                                <div class="card-footer">
                                    <div class="stats">
                                        <i class="material-icons">date_range</i> All time
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-3 col-md-6 col-sm-6">
                            <div class="card card-stats">
                                <div class="card-header card-header-success card-header-icon">
                                    <div class="card-icon">
                                        <i class="material-icons">store</i>
                                    </div>
                                    <p class="card-category">Klien Deal</p>
                                    <h3 class="card-title"><?php echo $countcdeal?></h3>
                                </div>
                                <div class="card-footer">
                                    <div class="stats">
                                        <i class="material-icons">date_range</i> All time
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-3 col-md-6 col-sm-6">
                            <div class="card card-stats">
                                <div class="card-header card-header-danger card-header-icon">
                                    <div class="card-icon">
                                        <i class="material-icons">store</i>
                                    </div>
                                    <p class="card-category">Klien No Deal</p>
                                    <h3 class="card-title"><?php echo $countcnodeal?></h3>
                                </div>
                                <div class="card-footer">
                                    <div class="stats">
                                        <i class="material-icons">date_range</i> All time
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="row">

                        <div class="col-lg-12 col-md-12">
                            <div class="card">
                                <div class="card-header card-header-warning">
                                    <h4 class="card-title">Data Hot Klien </h4>
                                    <p class="card-category"></p>
                                </div>
                                <div class="card-body table-responsive">
                                    <table class="table table-hover">
                                        <thead class="text-warning">
                                            <th>No</th>
                                            <th>Email/No telp</th>
                                            <th>Tanggal</th>
                                            <th>Detail</th>
                                        </thead>
                                        <tbody>
                                            <?php $x=1 ?>
                                            <?php foreach ($data->result() as $row) :?>
                                            <tr>
                                            <form action="<?php echo base_url().'panel/updateew'?>" method="post" enctype="multipart/form-data">
                                                    <input type="hidden" value="<?php echo $row->idh?>" name="id">
                                                    <input type="hidden" value="<?php  echo $row->emailwa?>" name="emailwa">
                                                    <input type="hidden" value="2" name="status">

                                                <td><?php echo $x?></td>
                                                <td><?php echo $row->emailwa?></td>
                                                <td><?php echo $row->waktu?></td>
                                                <td><button type="submit" class="btn btn-primary ">Done Send Quotation</button></td>
                                                <?php $x++?>
                                                </form>
                                            </tr>
                                            <?php   endforeach; ?>


                                        </tbody>
                                    </table>
                                    <div class="row">
                                        <div class="col">
                                            <!--Tampilkan pagination-->
                                            <?php echo $pagination; ?>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="row">

                        <div class="col-lg-12 col-md-12">
                            <div class="card">
                                <div class="card-header card-header-primary">
                                    <h4 class="card-title">Data Klien sudah dihubungi  (Quotation Progress)</h4>
                                    <p class="card-category"></p>
                                </div>
                                <div class="card-body table-responsive">
                                    <table class="table table-hover">
                                        <thead class="text-success">
                                            <th>No</th>
                                            <th>Email/No telp</th>
                                            <th>Detail</th>
                                        </thead>
                                        <tbody>
                                            <?php $x=1 ?>
                                            <?php foreach ($htmessagec as $data) : ?>
                                            <tr>
                                            <form action="<?php echo base_url().'panel/updatequotationdeal'?>" method="post" enctype="multipart/form-data">
                                            <input type="hidden" value="<?php echo $data['idh']?>" name="id">
                                                    <input type="hidden" value="3" name="status">
                                                <td><?php echo $x?></td>
                                                <td><?php echo $data['emailwa']?></td>
                                                <td><button type="submit" class="btn btn-success ">Deal</button>

                                                </form>
                                                <form action="<?php echo base_url().'panel/updatequotationnodeal'?>" method="post" enctype="multipart/form-data">
                                                    <input type="hidden" value="<?php echo $data['idh']?>" name="id">
                                                    <input type="hidden" value="4" name="status">
                                                    <button type="submit" class="btn btn-danger ">No Deal</button></td>
                                                </form>
                                                <?php $x++?>
                                            </tr>
                                            <?php   endforeach; ?>


                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="row">

                        <div class="col-lg-12 col-md-12">
                            <div class="card">
                                <div class="card-header card-header-success">
                                    <h4 class="card-title">Data Klien Deal</h4>
                                    <p class="card-category"></p>
                                </div>
                                <div class="card-body table-responsive">
                                    <table class="table table-hover">
                                        <thead class="text-success">
                                            <th>No</th>
                                            <th>Email/No telp</th>
                                            <th>Tanggal</th>
                                        </thead>
                                        <tbody>
                                            <?php $x=1 ?>
                                            <?php foreach ($htmessagecdeal as $data) : ?>
                                            <tr>
                                                <td><?php echo $x?></td>
                                                <td><?php echo $data['emailwa']?></td>
                                                <td><?php echo $data['waktu']?></td>

                                                <?php $x++?>
                                            </tr>
                                            <?php   endforeach; ?>


                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="row">

                        <div class="col-lg-12 col-md-12">
                            <div class="card">
                                <div class="card-header card-header-danger">
                                    <h4 class="card-title">Data Klien No Deal</h4>
                                    <p class="card-category"></p>
                                </div>
                                <div class="card-body table-responsive">
                                    <table class="table table-hover">
                                        <thead class="text-success">
                                            <th>No</th>
                                            <th>Email/No telp</th>
                                            <th>Tanggal</th>
                                        </thead>
                                        <tbody>
                                            <?php $x=1 ?>
                                            <?php foreach ($htmessagecnodeal as $data) : ?>
                                            <tr>
                                                <td><?php echo $x?></td>
                                                <td><?php echo $data['emailwa']?></td>
                                                <td><?php echo $data['waktu']?></td>

                                                <?php $x++?>
                                            </tr>
                                            <?php   endforeach; ?>


                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>