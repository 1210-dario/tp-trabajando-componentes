import React from 'react';
import ContentRowMovies from './ContentRowMovies';
import Table from './Table';
import LastMovieInDb from './LastMovieInDb';
import GenresInDb from './GenresInDb';

function ContentRowTop() {
	return (
		<React.Fragment>
			{/*<!-- Content Row Top -->*/}
			<div className="container-fluid">
				<div className="d-sm-flex aligns-items-center justify-content-between mb-4">
					<h1 className="h3 mb-0 text-gray-800">App Dashboard</h1>
				</div>

				{/*<!-- Content Row Movies-->*/}
				<ContentRowMovies />
				<div className="row">
					<LastMovieInDb />

					<GenresInDb />

				</div>
				<Table />

			</div>
			{/*<!--End Content Row Top-->*/}

		</React.Fragment>
	)

}
export default ContentRowTop;