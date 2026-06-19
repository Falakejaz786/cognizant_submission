package com.example.employeemanagement.repository;

import com.example.employeemanagement.entity.Employee;
import com.example.employeemanagement.projection.EmployeeView;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface EmployeeRepository extends JpaRepository<Employee, Long> {

    // Derived Query Methods
    List<Employee> findByName(String name);

    List<Employee> findByEmailContaining(String email);

    List<Employee> findByDepartmentId(Long departmentId);

    // Custom Query
    @Query("SELECT e FROM Employee e WHERE e.name = ?1")
    List<Employee> getEmployeesByName(String name);

    // Pagination + Sorting
    Page<Employee> findAll(Pageable pageable);

    // Projection
    List<EmployeeView> findBy();

}
