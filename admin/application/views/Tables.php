
            <!-- End Navbar -->
            <div class="content">
                <div class="container-fluid">
                    <div class="row">
                        <div class="col-md-12">
                            <div class="card">
                                <div class="card-header card-header-danger">
                                    <h4 class="card-title ">Data Klien Reservation</h4>
                                    <p class="card-category"> </p>
                                </div>
                                <div class="card-body">
                                    <div class="table-responsive">
                                        <table class="table">
                                            <thead class=" text-primary">
                                                <th>
                                                    No
                                                </th>
                                                <th>
                                                    Nama
                                                </th>
                                                <th>
                                                    Email/No Whatsapp
                                                </th>
                                                <th>
                                                    Tanggal Perencanaan
                                                </th>
                                                <th>
                                                    Pesan
                                                </th>
                                                <th>
                                                    Waktu
                                                </th>
                                                <th>
                                                    Detail
                                                </th>
                                            </thead>
                                            <tbody>
                                            <?php $x=1 ?>
                                            <?php foreach ($data->result() as $row) :?>
                                            <tr>
                                            <form action="<?php echo base_url().'panel/updatetab'?>" method="post" enctype="multipart/form-data">
                                                    <input type="hidden" value="<?php echo $row->id_feedback?>" name="id">
                                                    <input type="hidden" value="1" name="status">

                                                <td><?php echo $x?></td>
                                                <td><?php echo $row->nama?></td>
                                                <td><?php echo $row->email?></td>
                                                <td><?php echo $row->tanggal?></td>
                                                <td><?php echo $row->pesan?></td>
                                                <td><?php echo $row->waktu?></td>
                                                <td><button type="submit" class="btn btn-primary ">Approve</button></td>
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
                    </div>
                </div>
            </div>
        </div>