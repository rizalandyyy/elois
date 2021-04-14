
            <!-- End Navbar -->
            <div class="content">
                <div class="container-fluid">
                    <div class="row">
                        <div class="col-md-12">
                            <div class="card">
                                <div class="card-header card-header-info">
                                    <h4 class="card-title ">Data User Admin</h4>
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
                                                    Name
                                                </th>
                                                <th>
                                                    Username
                                                </th>
                                            </thead>
                                            <tbody>
                                            <?php $x=1 ?>
                                            <?php foreach ($admin as $data) : ?>
                                                <tr>
                                                    <td><?php echo $x?></td>
                                                    <td><?php echo $data['nama']?></td>
                                                    <td><?php echo $data['username']?></td>
                                                    <td></td>
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
            </div>
