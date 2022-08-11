import { useNavigate } from "react-router-dom";
import React from "react";
import { user } from "../services/api";
import { useState } from 'react';


export function Input() {
	const navigate = useNavigate();

	const [formValue, setformValue] = React.useState({
		age: 0,
		sex: 0,
		height: 0,
		weight: 0,
		bmi: 0,
		during: 0
	});
 
	const handleSubmit = async (event) => {
		event.preventDefault();
		const email = localStorage.getItem("kwixUser");
		const input = { ...formValue, email };
		try {
			const res = await user.edit(input);
			alert(res.data.message);
			navigate("/recommend");
		} catch (error) {
			alert(error.response.data.message);
		}
	};
 
	const handleChange = (event) => {
		event.preventDefault()
		console.log(event.target.value);
		let value = event.target.value;
		switch (event.target.name) {
			case "sex":
				value = parseInt(event.target.value, 10);
				break;
			case "during":
				value = parseInt(event.target.value, 10);
				break;
		}
		setformValue({
			...formValue,
			[event.target.name]: value,
		});
		console.log(formValue);
	};


	// 운동 부위
	const Check = () => {
		const formData=[
			{id:0, name:"가슴"},
			{id:1, name:"어깨"},
			{id:2, name:"하체"},
		]

		const [isChecked, setIsChecked] = useState(false);
		const [checkedItems, setCheckedItems] = useState(new Set());

		const checkHandler = ({ target }) => {
			setIsChecked(!isChecked);
			checkedItemHandler(target.parentNode, target.value, target.checked);
		};

		const checkedItemHandler = (box, id, isChecked) => {
			if (isChecked) {
				checkedItems.add(id);
				setCheckedItems(checkedItems);
				box.style.backgroundColor = "#F6CB44";
			} else if (!isChecked && checkedItems.has(id)) {
				checkedItems.delete(id);
				setCheckedItems(checkedItems);
				box.style.backgroundColor = "#fff";
			}
			return checkedItems;
		};

		return (
			<div clssName="contStyle">
				{formData.map((item) => (
					<label key={item.id} className="innerBox">
						<input
							type="checkbox"
							value={item.name}
							onChange={(e) => checkHandler(e)}
						/>
						<div>{item.name}</div>
					</label>
				))}										
			</div>
		)
	};


	return (
		<div className="container py-5 h-100">
			<div className="row justify-content-center align-items-center h-100">
				<div className="col-12 col-lg-9 col-xl-7">
					<div
						className="card shadow-2-strong card-registration"
						style={{ borderRadius: 15 }}
					>
						<div className="card-body p-4 p-md-5">
							<h3 className="mb-4 pb-2 pb-md-0 mb-md-5">
								운동 추천을 위해서 정보를 입력해주세요.
							</h3>
							<form onSubmit={handleSubmit}>
								<div className="row">
									<div className="col-md-6 mb-4">
										<div className="form-outline">
											<label
												className="form-label"
												htmlFor="age"
											>
												나이
											</label>
											<input
												type="text"
												id="age"
												className="form-control form-control-lg"
												name="age"
												value={formValue.age}
												onChange={handleChange}
											/>
										</div>
									</div>
								</div>

								<div className="row">
									<div className="col-md-6 mb-4">
										<p className="mb-2 pb-1">성별: </p>

										<div className="form-check form-check-inline">
											<input
												className="form-check-input"
												type="radio"
												name="sex"
												id="maleGender"
												checked={formValue.sex === 0}
												value={0}
												onChange={handleChange}
											/>
											<label
												className="form-check-label"
												htmlFor="maleGender"
											>
												남자
											</label>
										</div>

										<div className="form-check form-check-inline">
											<input
												className="form-check-input"
												type="radio"
												name="sex"
												id="femaleGender"
												checked={formValue.sex === 1}
												value={1}
												onChange={handleChange}
											/>
											<label
												className="form-check-label"
												htmlFor="femaleGender"
											>
												여자
											</label>
										</div>
									</div>
								</div>

								<div className="row">
									<div className="col-md-6 mb-4">
										<div className="form-outline">
											<label
												className="form-label"
												htmlFor="id_"
											>
												키
											</label>
											<input
												type="text"
												id="id_"
												className="form-control form-control-lg"
												name="height"
												value={formValue.height}
												onChange={handleChange}
											/>
										</div>
									</div>
								</div>

								<div className="row">
									<div className="col-md-6 mb-4">
										<div className="form-outline">
											<label
												className="form-label"
												htmlFor="password"
											>
												몸무게
											</label>
											<input
												type="text"
												id="password"
												className="form-control form-control-lg"
												name="weight"
												value={formValue.weight}
												onChange={handleChange}
											/>
										</div>
									</div>
								</div>

								<div className="row">
									<div className="col-md-6 mb-4">
										<div className="form-outline">
											<label
												className="form-label"
												htmlFor="id_"
											>
												<p>BMI</p>
												*BMI 계산기: {formValue.weight/((formValue.height*0.01)**2)}
											</label>
											<input
												type="text"
												id="id_"
												className="form-control form-control-lg"
												name="bmi"
												value={formValue.bmi}
												onChange={handleChange}
											/>
										</div>
									</div>
								</div>

								<div className="row">
									<div className="col-md-6 mb-4">
										<p className="mb-2 pb-1">운동 경력 </p>

										<div className="form-check form-check-inline">
											<input
												className="form-check-input"
												type="radio"
												name="during"
												id="1below"
												checked={formValue.during === 0}
												value={0}
												onChange={handleChange}
											/>
											<label
												className="form-check-label"
												htmlFor="1below"
											>
												1개월 미만
											</label>
										</div>

										<div className="form-check form-check-inline">
											<input
												className="form-check-input"
												type="radio"
												name="during"
												id="1above"
												checked={formValue.during === 1}
												value={1}
												onChange={handleChange}
											/>
											<label
												className="form-check-label"
												htmlFor="1above"
											>
												1개월 ~ 6개월
											</label>
										</div>

										<div className="form-check form-check-inline">
											<input
												className="form-check-input"
												type="radio"
												name="during"
												id="6above"
												checked={formValue.during === 2}
												value={2}
												onChange={handleChange}
											/>
											<label
												className="form-check-label"
												htmlFor="6above"
											>
												6개월 ~ 1년
											</label>
										</div>

										<div className="form-check form-check-inline">
											<input
												className="form-check-input"
												type="radio"
												name="during"
												id="12above"
												checked={formValue.during === 3}
												value={3}
												onChange={handleChange}
											/>
											<label
												className="form-check-label"
												htmlFor="12above"
											>
												1년 이상
											</label>
										</div>

									</div>
								</div>
								<p></p>

								<div className="row">
									<div className="col-12">
										<p>원하는 운동 부위</p>
										<Check></Check>
									</div>
								</div>

								<div className="mt-4 pt-2">
									<button
										className="w-50 btn btn-lg btn-primary"
										type="submit"
									>
										{/* <Link
											to="/recommend"
											className="text-white"
										> */}
											입력
										{/* </Link> */}
									</button>
								</div>
							</form>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
