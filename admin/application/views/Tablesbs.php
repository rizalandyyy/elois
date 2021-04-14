
            <!-- End Navbar -->
            <div class="content">
                <div class="container-fluid">
                    <div class="row">
                        <div class="col-md-12">
                            <div class="card">
                                <div class="card-header card-header-success">
                                    <h4 class="card-title ">Data Klien Wishes Bridestory</h4>
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
                                                    Jenis Event
                                                </th>
                                                <th>
                                                    Nama
                                                </th>
                                                <th>
                                                Kota Pernikahan / Event
                                                </th>
                                                <th>
                                                Tanggal Pernikahan / Event
                                                </th>
                                                <th>
                                                Jumlah Undangan
                                                </th>
                                                <th>
                                                Special Wishes
                                                </th>
                                                <th>
                                                Tanggal Submit
                                                </th>
                                            </thead>
                                            <tbody>
                                            <?php $x=1 ?>
                                            <?php foreach ($data->result() as $row) :?>
                                            <tr>

                                                <td><?php echo $x?></td>
                                                <td><?php echo $row->jenis_event?></td>
                                                <td><?php echo $row->nama?></td>
                                                <td><?php echo $row->kota?></td>
                                                <td><?php echo $row->tanggal?></td>
                                                <td><?php echo $row->jumlah?></td>
                                                <td><?php echo $row->wishes?></td>
                                                <td><?php echo $row->datenow?></td>

                                                <?php $x++?>
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