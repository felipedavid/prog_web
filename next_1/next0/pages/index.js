import {About} from './about.js';
import {Home2} from './home.js';

export default function Home() {
	return (
		<div>
			{About()}
			{Home2()}
			<h2>
				Viva Santana!
			</h2>
		</div>
	)
}
