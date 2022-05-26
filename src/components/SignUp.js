import axios from "axios";
import React from "react";

export function SignUp() {
	const [formValue, setformValue] = React.useState({
		name: "",
		birthdayDate: "",
		sex: 1,
		id: "",
		password: "",
		email: "",
		phoneNumber: "",
	});

	const handleSubmit = (event) => {
		console.log(formValue);
		axios
			.post("http://localhost:5000/sign_up", formValue)
			.then((x) => console.log(x));
	};

	const handleChange = (event) => {
		event.preventDefault()
		console.log(event.target.value);
		let value = event.target.value;
		if (event.target.name === "sex") {
			value = parseInt(event.target.value, 10);
		}
		setformValue({
			...formValue,
			[event.target.name]: value,
		});
		console.log(formValue);
	};

	return (
		<div class="container py-5 h-100">
			<div class="row justify-content-center align-items-center h-100">
				<div class="col-12 col-lg-9 col-xl-7">
					<div
						class="card shadow-2-strong card-registration"
						style={{ borderRadius: 15 }}
					>
						<div class="card-body p-4 p-md-5">
							<h3 class="mb-4 pb-2 pb-md-0 mb-md-5">
								회원가입 정보 입력
							</h3>
							<form onSubmit={handleSubmit}>
								<div class="row">
									<div class="col-md-6 mb-4">
										<div class="form-outline">
											<label
												class="form-label"
												for="Name"
											>
												이름
											</label>
											<input
												type="text"
												id="Name"
												class="form-control form-control-lg"
												name="name"
												value={formValue.name}
												onChange={handleChange}
											/>
										</div>
									</div>
								</div>

								<div class="row">
									<div class="col-md-6 mb-4 d-flex align-items-center">
										<div class="form-outline datepicker w-100">
											<label
												for="birthdayDate"
												class="form-label"
											>
												생년월일(8글자)
											</label>
											<input
												type="text"
												class="form-control form-control-lg"
												id="birthdayDate"
												name="birthdayDate"
												value={formValue.birthdayDate}
												onChange={handleChange}
											/>
										</div>
									</div>
									<div class="col-md-6 mb-4">
										<h6 class="mb-2 pb-1">성별: </h6>

										<div class="form-check form-check-inline">
											<input
												class="form-check-input"
												type="radio"
												name="sex"
												id="maleGender"
												checked={formValue.sex === 1}
												value={1}
												onChange={handleChange}
											/>
											<label
												class="form-check-label"
												for="maleGender"
											>
												남자
											</label>
										</div>

										<div class="form-check form-check-inline">
											<input
												class="form-check-input"
												type="radio"
												name="sex"
												id="femaleGender"
												checked={formValue.sex === 0}
												value={0}
												onChange={handleChange}
											/>
											<label
												class="form-check-label"
												for="femaleGender"
											>
												여자
											</label>
										</div>
									</div>
								</div>

								<div class="row">
									<div class="col-md-6 mb-4">
										<div class="form-outline">
											<label
												class="form-label"
												for="id_"
											>
												아이디
											</label>
											<input
												type="text"
												id="id_"
												class="form-control form-control-lg"
												name="id"
												value={formValue.id}
												onChange={handleChange}
											/>
										</div>
									</div>
								</div>

								<div class="row">
									<div class="col-md-6 mb-4">
										<div class="form-outline">
											<label
												class="form-label"
												for="password"
											>
												비밀번호
											</label>
											<input
												type="text"
												id="password"
												class="form-control form-control-lg"
												name="password"
												value={formValue.password}
												onChange={handleChange}
											/>
										</div>
									</div>
								</div>

								<div class="row">
									<div class="col-md-6 mb-4 pb-2">
										<div class="form-outline">
											<label
												class="form-label"
												for="emailAddress"
											>
												Email
											</label>
											<input
												type="email"
												id="emailAddress"
												class="form-control form-control-lg"
												name="email"
												value={formValue.email}
												onChange={handleChange}
											/>
										</div>
									</div>
									<div class="col-md-6 mb-4 pb-2">
										<div class="form-outline">
											<label
												class="form-label"
												for="phoneNumber"
											>
												Phone Number
											</label>
											<input
												type="tel"
												id="phoneNumber"
												class="form-control form-control-lg"
												name="phoneNumber"
												value={formValue.phoneNumber}
												onChange={handleChange}
											/>
										</div>
									</div>
								</div>

								<div class="row">
									<div class="col-12">
										<p>운동 경력</p>
										<select class="select form-control-lg">
											<option value="1" disabled>
												운동 경력
											</option>
											<option value="2">
												1개월 미만
											</option>
											<option value="3">
												1개얼 ~ 6개월
											</option>
											<option value="4">
												6개월 ~ 1년
											</option>
											<option value="5">1년 이상</option>
										</select>
										<label class="form-label select-label">
											{" "}
										</label>
									</div>
								</div>

								<div class="mt-4 pt-2">
									<button
										class="w-50 btn btn-lg btn-primary"
										type="submit"
									>
										회원가입
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
