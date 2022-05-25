import { Link } from "react-router-dom";

export function Input() {
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
							<form>
								<div className="row">
									<div className="col-md-6 mb-4">
										<div className="form-outline">
											<label
												className="form-label"
												htmlFor="Name"
											>
												나이
											</label>
											<input
												type="text"
												id="Name"
												className="form-control form-control-lg"
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
												name="inlineRadioOptions"
												id="maleGender"
												value="option1"
												checked
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
												name="inlineRadioOptions"
												id="femaleGender"
												value="option2"
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
											/>
										</div>
									</div>
								</div>

								<div className="row">
									<div className="col-12">
										<p>운동경력</p>
										<select className="select form-control-lg">
											<option value="1" disabled>
												운동 경력
											</option>
											<option value="2">
												1개월 미만
											</option>
											<option value="3">
												1개월 ~ 6개월
											</option>
											<option value="4">
												6개월 ~ 1년
											</option>
											<option value="5">1년 이상</option>
										</select>
										<label className="form-label select-label"></label>
									</div>
								</div>
								<p></p>

								<div className="row">
									<div className="col-12">
										<p>원하는 운동 부위</p>
										<div className="container">
											<fieldset>
												<div>
													<input
														type="checkbox"
														id="chest"
														name="chest"
														checked
													/>
													<label htmlFor="chest">
														가슴
													</label>
												</div>

												<div>
													<input
														type="checkbox"
														id="shoulder"
														name="shoulder"
														checked
													/>
													<label htmlFor="shoulder">
														어깨
													</label>
												</div>

												<div>
													<input
														type="checkbox"
														id="lowerbody"
														name="lowerbody"
													/>
													<label htmlFor="lowerbody">
														하체
													</label>
												</div>
											</fieldset>
										</div>
									</div>
								</div>

								<div className="mt-4 pt-2">
									<button
										className="w-50 btn btn-lg btn-primary"
										type="button"
									>
										<Link to="/recommend">입력</Link>
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
