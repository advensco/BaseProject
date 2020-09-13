'use strict';

function getFieldsFromItemKeys(items) {
	// assuming all items of same object type so fields extracted from first item only
	if (items && items.length > 0) {
		return Object.keys(items[0]).map((f) => {
			return { key: f, label: f };
		});
	}
}

function ATable(props) {
	// if (!props.items || props.items.length == 0) {
	// 	return <h4>No Items</h4>;
	// }
	let fields = props.fields || getFieldsFromItemKeys(props.items);
	let items = props.items || false;
	let apiURL = props.apiURL;

	let currentPage = 1;
	let perPage = props.pageCount || 10;
	let filter = '';
	let sortBy = '';
	let sortDesc = false;

	return (
		<div>
			<span>{}</span>

			<table class="table table-striped  table-bordered">
				<thead>
					<tr>{fields.map((f) => <th scope="col">{f.label}</th>)}</tr>
				</thead>

				<tbody>
					{!items && <h4>No items </h4>}
					{items && items.map((i) =>
					 <tr>
						{fields.map((f) =>
					 <td scope="col">{i[f.key]}</td>)}
					 </tr>)}
				</tbody>
			</table>

			{/* paging */}
		</div>
	);

	async function myProvider(ctx) {
		this.isBusy = true;
		try {
			const response =await  axios.get(`/some/url?page=${ctx.currentPage}&size=${ctx.perPage}`);
			this.isBusy = false;
			return response.items;
		} catch (error) {
			this.isBusy = false;
			return [];
		}
	}
}

let fields = [
	{ key: 'id', label: 'User Id' },
	{ key: 'name', label: 'Name ' },
	{ key: 'age', label: 'Age ' },
	{ key: 'value', label: 'Value ' }
];
let items = [
	{ id: 1, name: 'mohamed ', age: 26 },
	{ id: 2, name: 'ahmed  ', age: 22 },
	{ id: 3, name: 'Ali  ', age: 25 },
	{ id: 4, name: 'hossam  ', age: 28 },
	{ id: 33, name: 'kamal   ', age: 18 },
	{ id: 54, name: 'kasasdmal   ', age: 18 },
	{ id: 54, name: 'kasasdmal   ', age: 18 },
	{ id: 54, name: 'kasasdmal   ', age: 18 },
];

 

let domContainer = document.querySelector('#app');

ReactDOM.render(<ATable items={items} />, domContainer);
